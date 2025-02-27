import { Module } from '@nestjs/common';
import { SocketGateway } from './infra/socket.gateway';
// import { PlayerListener } from './application/listeners/players.listeners';

@Module({
  providers: [
    SocketGateway,
    // PlayerListener,
  ],
})
export class SocketModule { }
