import { Injectable, OnModuleInit } from '@nestjs/common';
import { SocketService } from 'src/modules/socket/socket.service';
import { DepositDto } from '../domain/dto/deposit.dto';
import { PaydDepositsLeadService } from '../services/paydDepositsLead.service';
import { PlayerDto } from 'src/modules/players/domain/dto/player.dto';
import { CreateDepositsCampaignService } from '../services/createDepositsCampaign.service';
import { CreateDepositsLeadService } from '../services/createDepositsLead.service';
import { CreatePlayersLeadService } from 'src/modules/players/services/createPlayersLead.service';

@Injectable()
export class DepositsListener implements OnModuleInit {
  constructor(
    private readonly socketService: SocketService,
    private readonly createPlayersLeadService: CreatePlayersLeadService,
    private readonly createDepositsLeadService: CreateDepositsLeadService,
    private readonly createDepositsCampaignService: CreateDepositsCampaignService,
    private readonly paydDepositsLeadService: PaydDepositsLeadService,
  ) { }

  onModuleInit() {
    this.socketService.on('deposit.created', async ({ data, updatedPlayerData }: { data: DepositDto, updatedPlayerData?: PlayerDto }) => {
      const playerLead = await this.createPlayersLeadService.execute(updatedPlayerData);
      const depositLead = await this.createDepositsLeadService.execute(data);
      await this.createDepositsCampaignService.execute(playerLead);
    });

    this.socketService.on('deposit.payd', ({ data, updatedPlayerData }: { data: DepositDto, updatedPlayerData?: PlayerDto }) => {
      this.paydDepositsLeadService.execute(data);
    });
  }
}
