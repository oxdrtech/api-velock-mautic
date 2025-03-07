import { Injectable, OnModuleInit } from '@nestjs/common';
import { SocketService } from 'src/modules/socket/socket.service';
import { CreatePlayersLeadService } from '../services/createPlayersLead.service';
import { PlayerDto } from '../domain/dto/player.dto';
import { CreatePlayersCampaignService } from '../services/createPlayersCampaign.service';

@Injectable()
export class PlayersListener implements OnModuleInit {
  constructor(
    private readonly socketService: SocketService,
    private readonly createPlayersLeadService: CreatePlayersLeadService,
    private readonly createPlayersCampaignService: CreatePlayersCampaignService,
  ) { }

  onModuleInit() {
    this.socketService.on('player.created', async ({ data }: { data: PlayerDto }) => {
      const lead = await this.createPlayersLeadService.execute(data);
      await this.createPlayersCampaignService.execute(lead);
    });
  }
}
