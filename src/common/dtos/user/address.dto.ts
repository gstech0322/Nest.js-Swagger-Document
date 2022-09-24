import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class Address {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly city: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly state: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly line1: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly line2: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly zipCode: string;
}