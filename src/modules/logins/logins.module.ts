import { Module } from '@nestjs/common';
import { SocketModule } from '../socket/socket.module';
import { LoginsListener } from './infra/listeners/logins.listener';

@Module({
  imports: [
    SocketModule,
  ],
  providers: [
    LoginsListener,
  ],
})
export class LoginsModule { }
