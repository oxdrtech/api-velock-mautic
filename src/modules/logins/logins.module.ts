import { Module } from '@nestjs/common';
import { SocketModule } from '../socket/socket.module';
import { MauticModule } from '../mautic/mautic.module';
import { LoginsListener } from './infra/logins.listener';
import { CreateLoginsLeadService } from './services/createLoginsLead.service';
import { LOGINS_SERVICE_TOKEN } from './utils/loginsServiceToken';
import { LoginsRepository } from './infra/logins.repository';

@Module({
  imports: [
    SocketModule,
    MauticModule,
  ],
  providers: [
    LoginsListener,
    CreateLoginsLeadService,
    {
      provide: LOGINS_SERVICE_TOKEN,
      useClass: LoginsRepository,
    },
  ],
})
export class LoginsModule { }
