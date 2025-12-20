import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import {
  CreateBudgetDto,
  ProcessPaymentDto,
  TrackExpenseDto,
} from '../../shared/dto/financial.dto';

@ApiTags('financial')
@ApiBearerAuth()
@Controller('financial')
export class FinancialController {
  @Post('budget')
  @ApiOkResponse({ description: 'Budget created' })
  createBudget(@Body() dto: CreateBudgetDto) {
    return {
      client: dto.client,
      budget: {
        total_amount: dto.total_amount,
        period: dto.period,
        categories: dto.categories,
      },
    };
  }

  @Post('expense')
  trackExpense(@Body() dto: TrackExpenseDto) {
    return {
      budget_id: dto.budget_id,
      vendor: dto.vendor,
      amount: dto.amount,
      category: dto.category,
    };
  }

  @Post('payment')
  processPayment(@Body() dto: ProcessPaymentDto) {
    return {
      client_id: dto.client_id,
      amount: dto.amount,
      payment_type: dto.payment_type,
      status: 'completed',
    };
  }

  @Get('report')
  @ApiOkResponse({ description: 'Financial report' })
  report() {
    return {
      remaining_budget: 24000,
      profit_margin: 48,
      expense_breakdown: { misc: '...' },
    };
  }
}
