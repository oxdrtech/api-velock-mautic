import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SocketModule } from './modules/socket/socket.module';
import { PlayersModule } from './modules/players/players.module';
import { DepositsModule } from './modules/deposits/deposits.module';
import { WithdrawsModule } from './modules/withdraws/withdraws.module';

@Module({
  imports: [
    SocketModule,
    PlayersModule,
    DepositsModule,
    WithdrawsModule,
  ],
  controllers: [
    AppController,
  ],
})
export class AppModule { }
