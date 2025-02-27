import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SocketModule } from './modules/socket/socket.module';

@Module({
  imports: [
    SocketModule,
  ],
  controllers: [
    AppController,
  ],
})
export class AppModule { }
