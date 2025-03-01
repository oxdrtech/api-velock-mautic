import { Module } from '@nestjs/common';
import { SocketModule } from '../socket/socket.module';
import { DepositsListener } from './infra/deposits.listener';
import { CreateDepositsLeadService } from './services/createDepositsLead.service';
import { DEPOSITS_SERVICE_TOKEN } from './utils/depositsServiceToken';
import { DepositsRepository } from './infra/deposits.repository';
import { MauticModule } from '../mautic/mautic.module';
import { PaydDepositsLeadService } from './services/paydDepositsLead.service';

@Module({
  imports: [
    SocketModule,
    MauticModule,
  ],
  providers: [
    DepositsListener,
    CreateDepositsLeadService,
    PaydDepositsLeadService,
    {
      provide: DEPOSITS_SERVICE_TOKEN,
      useClass: DepositsRepository,
    },
  ],
})
export class DepositsModule { }
