import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsInt, IsNotEmpty, IsUUID } from "class-validator";
import { CreateDateColumn } from "typeorm";
import { TradeType } from "./tradetype.dto";

export class Trade {
  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  readonly id: string;

  @ApiProperty({ type: TradeType })
  @IsArray()
  readonly tradType: TradeType;

  @CreateDateColumn()
  @ApiProperty()
  approvedOn: Date;

  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  readonly approvedBy: string;

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  readonly level: number;

  isValid() {}
}