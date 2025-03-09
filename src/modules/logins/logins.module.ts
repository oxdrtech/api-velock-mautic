import { forwardRef, Module } from '@nestjs/common';
import { SocketModule } from '../socket/socket.module';
import { MauticModule } from '../mautic/mautic.module';
import { LoginsListener } from './infra/logins.listener';
import { PlayersModule } from '../players/players.module';
import { CreateLoginsLeadService } from './services/createLoginsLead.service';
import { LOGINS_SERVICE_TOKEN } from './utils/loginsServiceToken';
import { LoginsRepository } from './infra/logins.repository';

@Module({
  imports: [
    SocketModule,
    MauticModule,
    forwardRef(() => PlayersModule),
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
