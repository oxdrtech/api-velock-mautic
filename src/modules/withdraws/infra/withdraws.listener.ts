import { Injectable, OnModuleInit } from '@nestjs/common';
import { SocketService } from 'src/modules/socket/socket.service';
import { CreateWithdrawsLeadService } from '../services/createWithdrawsLead.service';
import { WithdrawDto } from '../domain/dto/withdraw.dto';

@Injectable()
export class WithdrawsListener implements OnModuleInit {
  constructor(
    private readonly socketService: SocketService,
    private readonly createWithdrawsLeadService: CreateWithdrawsLeadService,
  ) { }

  onModuleInit() {
    this.socketService.on('withdraw.created', (data: WithdrawDto) => {
      this.createWithdrawsLeadService.execute(data);
    });
  }
}
