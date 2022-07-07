import { SocketIOGateWay } from './socketio.gateway';
import { BinanceModule } from './../binance/binance.module';
import { SocketioController } from './socketio.controller';
import { Module } from '@nestjs/common';
import { SocketioService } from './socketio.service';

@Module({
  imports: [BinanceModule],
  providers: [SocketioService, SocketIOGateWay],
  controllers: [SocketioController],
})
export class SocketioModule {}
