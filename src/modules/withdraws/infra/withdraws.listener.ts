import { Injectable, OnModuleInit } from '@nestjs/common';
import { SocketService } from 'src/modules/socket/socket.service';
import { CreateWithdrawsLeadService } from '../services/createWithdrawsLead.service';
import { WithdrawDto } from '../domain/dto/withdraw.dto';
import { PlayerDto } from 'src/modules/players/domain/dto/player.dto';

@Injectable()
export class WithdrawsListener implements OnModuleInit {
  constructor(
    private readonly socketService: SocketService,
    private readonly createWithdrawsLeadService: CreateWithdrawsLeadService,
  ) { }

  onModuleInit() {
    this.socketService.on('withdraw.created', ({ data, updatedPlayerData }: { data: WithdrawDto, updatedPlayerData?: PlayerDto }) => {
      this.createWithdrawsLeadService.execute(data);
    });
  }
}
