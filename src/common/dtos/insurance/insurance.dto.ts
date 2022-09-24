import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsString, IsUUID } from "class-validator";
import { InsuranceType } from "src/common/enums/insurance.enum";
import { CreateDateColumn } from "typeorm";

export class Insurance {
  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  readonly id: string;

  @ApiProperty({ enum: InsuranceType, default: InsuranceType.WorkersCompensation })
  @IsEnum(InsuranceType)
  @IsNotEmpty()
  readonly insuranceType: InsuranceType;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly insuranceId: string;

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

  getDocumentLink() {}

  isValid() {}
}