import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateBudgetDto {
  @ApiProperty()
  @IsString()
  client: string;

  @ApiProperty()
  @IsNumber()
  total_amount: number;

  @ApiProperty()
  @IsString()
  period: string;

  @ApiProperty({ type: [String] })
  categories: string[];
}

export class TrackExpenseDto {
  @ApiProperty()
  @IsString()
  budget_id: string;

  @ApiProperty()
  @IsString()
  vendor: string;

  @ApiProperty()
  @IsNumber()
  amount: number;

  @ApiProperty()
  @IsString()
  category: string;
}

export class ProcessPaymentDto {
  @ApiProperty()
  @IsString()
  client_id: string;

  @ApiProperty()
  @IsNumber()
  amount: number;

  @ApiProperty()
  @IsString()
  payment_type: string;
}

export class FinancialReportDto {
  @ApiProperty()
  remaining_budget: number;

  @ApiProperty()
  profit_margin: number;

  @ApiProperty({ type: Object })
  expense_breakdown: Record<string, unknown>;
}
