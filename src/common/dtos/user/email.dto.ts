import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEnum, IsNotEmpty, IsString, IsUUID } from "class-validator";
import { EmailType } from "../../enums/email.enum";

export class Email {
  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  readonly id: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @ApiProperty({ enum: EmailType, default: EmailType.Primary })
  @IsEnum(EmailType)
  @IsNotEmpty()
  readonly type: EmailType;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
}