import { Module } from '@nestjs/common';
import { SocketModule } from '../socket/socket.module';
import { DepositsListener } from './infra/listeners/deposits.listener';

@Module({
  imports: [
    SocketModule,
  ],
  providers: [
    DepositsListener,
  ],
})
export class DepositsModule { }
