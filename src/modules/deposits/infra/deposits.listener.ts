import { Injectable, OnModuleInit } from '@nestjs/common';
import { SocketService } from 'src/modules/socket/socket.service';
import { DepositDto } from '../domain/dto/deposit.dto';
import { PlayerDto } from 'src/modules/players/domain/dto/player.dto';
import { CreateDepositsCampaignService } from '../services/createDepositsCampaign.service';
import { PaydDepositsCampaignService } from '../services/paydDepositsCampaign.service';
import { CreateDepositsLeadService } from '../services/createDepositsLead.service';
import { PaydDepositsLeadService } from '../services/paydDepositsLead.service';

@Injectable()
export class DepositsListener implements OnModuleInit {
  constructor(
    private readonly socketService: SocketService,
    private readonly createDepositsLeadService: CreateDepositsLeadService,
    private readonly createDepositsCampaignService: CreateDepositsCampaignService,
    private readonly paydDepositsLeadService: PaydDepositsLeadService,
    private readonly paydDepositsCampaignService: PaydDepositsCampaignService,
  ) { }

  onModuleInit() {
    this.socketService.on('deposit.created', async ({ data, updatedPlayer }: { data: DepositDto, updatedPlayer?: PlayerDto }) => {
      const lead = await this.createDepositsLeadService.execute(data, updatedPlayer);
      await this.createDepositsCampaignService.execute(lead);
    });

    this.socketService.on('deposit.payd', async ({ data, updatedPlayer }: { data: DepositDto, updatedPlayer?: PlayerDto }) => {
      const lead = await this.paydDepositsLeadService.execute(data, updatedPlayer);
      await this.paydDepositsCampaignService.execute(lead);
    });
  }
}
