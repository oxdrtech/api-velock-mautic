import { forwardRef, Module } from '@nestjs/common';
import { SocketModule } from '../socket/socket.module';
import { WITHDRAWS_SERVICE_TOKEN } from './utils/withdrawsServiceToken';
import { WithdrawsRepository } from './infra/withdraws.repository';
import { WithdrawsListener } from './infra/withdraws.listener';
import { CreateWithdrawsLeadService } from './services/createWithdrawsLead.service';
import { MauticModule } from '../mautic/mautic.module';
import { PlayersModule } from '../players/players.module';
import { CreateWithdrawsCampaignService } from './services/createWithdrawsCampaign.service';

@Module({
  imports: [
    SocketModule,
    MauticModule,
    forwardRef(() => PlayersModule),
  ],
  providers: [
    WithdrawsListener,
    CreateWithdrawsLeadService,
    CreateWithdrawsCampaignService,
    {
      provide: WITHDRAWS_SERVICE_TOKEN,
      useClass: WithdrawsRepository,
    },
  ],
})
export class WithdrawsModule { }
