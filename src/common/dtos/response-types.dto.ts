import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsString } from "class-validator";

export class SuccessResponse {
  @ApiProperty()
  @IsBoolean()
  readonly success: boolean;

  constructor(success = true) {
    this.success = success;
  }
}

export class AccessTokenResponse {
  @ApiProperty()
  @IsString()
  readonly accessToken: string;

  constructor(accessToken) {
    this.accessToken = accessToken;
  }
}