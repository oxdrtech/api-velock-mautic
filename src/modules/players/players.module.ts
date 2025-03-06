import { Module } from '@nestjs/common';
import { SocketModule } from '../socket/socket.module';
import { CreatePlayersLeadService } from './services/createPlayersLead.service';
import { PLAYERS_SERVICE_TOKEN } from './utils/playersServiceToken';
import { PlayersRepository } from './infra/players.repository';
import { MauticModule } from '../mautic/mautic.module';
import { PlayersListener } from './infra/players.listener';
import { CreatePlayersCampaignService } from './services/createPlayersCampaign.service';

@Module({
  imports: [
    SocketModule,
    MauticModule,
  ],
  providers: [
    PlayersListener,
    CreatePlayersLeadService,
    CreatePlayersCampaignService,
    {
      provide: PLAYERS_SERVICE_TOKEN,
      useClass: PlayersRepository,
    },
  ],
})
export class PlayersModule { }
