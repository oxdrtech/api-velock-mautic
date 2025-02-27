import { Module } from '@nestjs/common';
import { SocketModule } from '../socket/socket.module';
import { WithdrawsListener } from './infra/listeners/withdraws.listener';

@Module({
  imports: [
    SocketModule,
  ],
  providers: [
    WithdrawsListener,
  ],
})
export class WithdrawsModule { }
