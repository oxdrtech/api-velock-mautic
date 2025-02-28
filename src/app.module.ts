import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SocketModule } from './modules/socket/socket.module';
import { PlayersModule } from './modules/players/players.module';
import { DepositsModule } from './modules/deposits/deposits.module';
import { WithdrawsModule } from './modules/withdraws/withdraws.module';
import { LoginsModule } from './modules/logins/logins.module';
import { ConfigModule } from '@nestjs/config';
import { MauticModule } from './modules/mautic/mautic.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SocketModule,
    PlayersModule,
    DepositsModule,
    WithdrawsModule,
    LoginsModule,
    MauticModule,
  ],
  controllers: [
    AppController,
  ],
})
export class AppModule { }
