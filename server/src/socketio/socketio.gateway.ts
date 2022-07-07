import { Symbols } from './../commons/constants/symbols.contant';
import { BinanceService } from './../binance/binance.service';
import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Cron, CronExpression } from '@nestjs/schedule';

@WebSocketGateway({ cors: true })
export class SocketIOGateWay
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private readonly binanceService: BinanceService) {}
  private logger: Logger = new Logger('SocketIOGateway');

  afterInit(server: Server) {
    this.logger.log('Initialized');
  }

  async handleConnection(client: any, ...args: any[]) {
    const data = await this.binanceService.getBTCUSDTPrice('BTC/USDT');
    this.server.emit('returnBinancePrice', data);
    this.logger.log(`Client connected: ${client.id}`);
  }
  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  @WebSocketServer()
  server;

  // @Cron(CronExpression.EVERY_10_SECONDS)
  @Cron(CronExpression.EVERY_MINUTE)
  async handleGetBinancePrice() {
    console.log('get BTC/USTD called');
    const data = await this.binanceService.getBTCUSDTPrice('BTC/USDT');
    this.server.emit('returnBinancePrice', data);
  }
}
