import { Injectable, OnModuleInit } from '@nestjs/common';
import { SocketService } from 'src/modules/socket/socket.service';
import { LoginDto } from '../domain/dto/login.dto';
import { PlayerDto } from 'src/modules/players/domain/dto/player.dto';
import { CreatePlayersLeadService } from 'src/modules/players/services/createPlayersLead.service';

@Injectable()
export class LoginsListener implements OnModuleInit {
  constructor(
    private readonly socketService: SocketService,
    private readonly createPlayersLeadService: CreatePlayersLeadService,
  ) { }

  onModuleInit() {
    this.socketService.on('login.created', async ({ data, updatedPlayer }: { data: LoginDto, updatedPlayer?: PlayerDto }) => {
      await this.createPlayersLeadService.execute(updatedPlayer);
    });
  }
}
