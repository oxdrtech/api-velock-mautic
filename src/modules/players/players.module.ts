import { Module } from '@nestjs/common';
import { SocketModule } from '../socket/socket.module';
import { PlayersListener } from './listeners/players.listener';

@Module({
  imports: [
    SocketModule,
  ],
  providers: [
    PlayersListener,
  ],
})
export class PlayersModule { }
