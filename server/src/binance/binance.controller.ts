import { Symbols } from './../commons/constants/symbols.contant';
import { BinanceService } from './binance.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('binance')
export class BinanceController {
  constructor(private readonly binanceService: BinanceService) {}

  @Get(':symbol')
  async getBinancePrice(@Param('symbol') symbol = 'symbol_1') {
    return this.binanceService.getBTCUSDTPrice(Symbols[symbol]);
  }
}
