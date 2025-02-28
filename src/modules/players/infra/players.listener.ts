import { Injectable, OnModuleInit } from '@nestjs/common';
import { SocketService } from 'src/modules/socket/socket.service';
import { CreatePlayersLeadService } from '../services/createPlayersLead.service';
import { PlayerDto } from '../domain/dto/player.dto';

@Injectable()
export class PlayersListener implements OnModuleInit {
  constructor(
    private readonly socketService: SocketService,
    private readonly createPlayersLeadService: CreatePlayersLeadService,
  ) { }

  onModuleInit() {
    this.socketService.on('player.created', (data: PlayerDto) => {
      this.createPlayersLeadService.execute(data);
    });
  }
}
