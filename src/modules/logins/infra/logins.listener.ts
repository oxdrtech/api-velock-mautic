import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateLoginsLeadService } from '../services/createLoginsLead.service';
import { SocketService } from 'src/modules/socket/socket.service';
import { LoginDto } from '../domain/dto/login.dto';
import { PlayerDto } from 'src/modules/players/domain/dto/player.dto';

@Injectable()
export class LoginsListener implements OnModuleInit {
  constructor(
    private readonly socketService: SocketService,
    private readonly createLoginsLeadService: CreateLoginsLeadService,
  ) { }

  onModuleInit() {
    this.socketService.on('login.created', ({ data, updatedPlayerData }: { data: LoginDto, updatedPlayerData?: PlayerDto }) => {
      this.createLoginsLeadService.execute(data);
    });
  }
}
