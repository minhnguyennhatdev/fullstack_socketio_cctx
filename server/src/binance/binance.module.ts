import { Module } from '@nestjs/common';
import { BinanceService } from './binance.service';
import { BinanceController } from './binance.controller';
import { CcxtModule } from 'nestjs-ccxt';

@Module({
  imports: [CcxtModule.forRoot({})],
  providers: [BinanceService],
  controllers: [BinanceController],
  exports: [BinanceService],
})
export class BinanceModule {}
