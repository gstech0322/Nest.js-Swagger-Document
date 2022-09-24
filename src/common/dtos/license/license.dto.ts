import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsDate, IsNotEmpty, IsString, IsUUID } from "class-validator";
import { CreateDateColumn } from "typeorm";
import { LicenseType } from "./licensetype.dto";

export class License {
  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  readonly id: string;

  @ApiProperty({ type: LicenseType })
  @IsArray()
  readonly licenseType: LicenseType;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly licenseId: string;

  @CreateDateColumn()
  @ApiProperty()
  validFromDate: Date;

  @CreateDateColumn()
  @ApiProperty()
  validToDate: Date;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly s3Bucket: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly s3Path: string;

  @CreateDateColumn()
  @ApiProperty()
  approvedOn: Date;

  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  readonly approvedBy: string;

  getDocumentLink() {}

  isValid() {}
}