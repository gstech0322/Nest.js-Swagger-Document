import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";
import { Address } from "./address.dto";
import { Email } from './email.dto';

export class RegisterUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly firstName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly middleName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @ApiProperty({ type: Email })
  @IsArray()
  readonly email: Email

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  readonly phone: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly picture: string;

  @ApiProperty({ type: Address })
  @IsArray()
  readonly address: Address;

  method1() {}

  method2() {}
}

export class UserDto extends RegisterUserDto{
  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  readonly id: string;
}