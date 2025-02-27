import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SocketModule } from './modules/socket/socket.module';
import { PlayersModule } from './modules/players/players.module';

@Module({
  imports: [
    SocketModule,
    PlayersModule,
  ],
  controllers: [
    AppController,
  ],
})
export class AppModule { }
