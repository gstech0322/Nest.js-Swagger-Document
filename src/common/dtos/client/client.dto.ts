import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty } from "class-validator";
import { ClientType } from "src/common/enums/client.enum";
import { UserDto } from "../user/user.dto";

export class ClientDto extends UserDto {

  @ApiProperty({ enum: ClientType, default: ClientType.HomeOwner })
  @IsEnum(ClientType)
  @IsNotEmpty()
  readonly clientType: ClientType;

  method1() {}

  method2() {}
}