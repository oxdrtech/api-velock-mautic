import { forwardRef, Module } from '@nestjs/common';
import { SocketModule } from '../socket/socket.module';
import { DepositsListener } from './infra/deposits.listener';
import { DEPOSITS_SERVICE_TOKEN } from './utils/depositsServiceToken';
import { DepositsRepository } from './infra/deposits.repository';
import { MauticModule } from '../mautic/mautic.module';
import { PlayersModule } from '../players/players.module';
import { CreateDepositsCampaignService } from './services/createDepositsCampaign.service';
import { PaydDepositsCampaignService } from './services/paydDepositsCampaign.service';
import { CreateDepositsLeadService } from './services/createDepositsLead.service';
import { PaydDepositsLeadService } from './services/paydDepositsLead.service';

@Module({
  imports: [
    SocketModule,
    MauticModule,
    forwardRef(() => PlayersModule),
  ],
  providers: [
    DepositsListener,
    CreateDepositsLeadService,
    CreateDepositsCampaignService,
    PaydDepositsLeadService,
    PaydDepositsCampaignService,
    {
      provide: DEPOSITS_SERVICE_TOKEN,
      useClass: DepositsRepository,
    },
  ],
})
export class DepositsModule { }
