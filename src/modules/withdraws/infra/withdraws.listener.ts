import { Injectable, OnModuleInit } from '@nestjs/common';
import { SocketService } from 'src/modules/socket/socket.service';
import { CreateWithdrawsLeadService } from '../services/createWithdrawsLead.service';
import { WithdrawDto } from '../domain/dto/withdraw.dto';
import { PlayerDto } from 'src/modules/players/domain/dto/player.dto';
import { CreatePlayersLeadService } from 'src/modules/players/services/createPlayersLead.service';
import { CreateWithdrawsCampaignService } from '../services/createWithdrawsCampaign.service';

@Injectable()
export class WithdrawsListener implements OnModuleInit {
  constructor(
    private readonly socketService: SocketService,
    private readonly createPlayersLeadService: CreatePlayersLeadService,
    private readonly createWithdrawsLeadService: CreateWithdrawsLeadService,
    private readonly createWithdrawsCampaignService: CreateWithdrawsCampaignService,
  ) { }

  onModuleInit() {
    this.socketService.on('withdraw.created', async ({ data, updatedPlayer }: { data: WithdrawDto, updatedPlayer?: PlayerDto }) => {
      const playerLead = await this.createPlayersLeadService.execute(updatedPlayer);
      const withdrawLead = await this.createWithdrawsLeadService.execute(data);
      await this.createWithdrawsCampaignService.execute(playerLead);
    });
  }
}
