import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import fs from 'fs';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger API Document Migration
  const config = new DocumentBuilder()
    .setTitle('Swagger Document for MVP')
    .setDescription('API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  require('fs').writeFileSync("./swagger-spec.json", JSON.stringify(document));
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
