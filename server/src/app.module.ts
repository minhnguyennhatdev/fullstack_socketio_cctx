import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocketioController } from './socketio/socketio.controller';
import { SocketioModule } from './socketio/socketio.module';

@Module({
  imports: [SocketioModule, ScheduleModule.forRoot()],
  controllers: [AppController, SocketioController],
  providers: [AppService],
})
export class AppModule {}
