import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsBoolean, IsNotEmpty, IsString } from "class-validator";
import { UserDto } from "../user/user.dto";
import { Insurance } from "../insurance/insurance.dto";
import { License } from "../license/license.dto";
import { Trade } from "../trade/trade.dto";

export class VendorDto extends UserDto {

  @ApiProperty({ type: License})
  @IsArray()
  readonly licenseList: License;

  @ApiProperty({ type: Insurance })
  @IsArray()
  readonly insuranceList: Insurance;

  @ApiProperty({ type: Trade })
  @IsArray()
  readonly tradeList: Trade;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly companyName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly promoCode: string;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  readonly tosAccepted: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  readonly payoutEnabled: boolean;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly stripeId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly qbId: string;

  method1() {}

  method2() {}
}