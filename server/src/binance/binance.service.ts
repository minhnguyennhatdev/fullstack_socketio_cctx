import { Injectable } from '@nestjs/common';
import { CcxtService } from 'nestjs-ccxt';
import * as ccxt from 'ccxt';

@Injectable()
export class BinanceService {
  constructor(private ccxtService: CcxtService) {}

  async loadClientMarket() {
    const client = await this.ccxtService.getClient('binance', {
      id: 'ETHBTC',
    });
    return client.markets;
  }

  async getBTCUSDTPrice(symbol: string) {
    const binance = new ccxt.binance();
    return await binance.fetchOHLCV(symbol, '1m', undefined, 20);
  }
}
