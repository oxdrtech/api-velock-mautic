import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SocketModule } from './modules/socket/socket.module';
import { PlayersModule } from './modules/players/players.module';
import { DepositsModule } from './modules/deposits/deposits.module';
import { WithdrawsModule } from './modules/withdraws/withdraws.module';
import { LoginsModule } from './modules/logins/logins.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SocketModule,
    PlayersModule,
    DepositsModule,
    WithdrawsModule,
    LoginsModule,
  ],
  controllers: [
    AppController,
  ],
})
export class AppModule { }
