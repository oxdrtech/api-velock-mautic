import { Injectable, OnModuleInit } from '@nestjs/common';
import { SocketService } from 'src/modules/socket/socket.service';
import { CreateDepositsLeadService } from '../services/createDepositsLead.service';
import { DepositDto } from '../domain/dto/deposit.dto';
import { PaydDepositsLeadService } from '../services/paydDepositsLead.service';

@Injectable()
export class DepositsListener implements OnModuleInit {
  constructor(
    private readonly socketService: SocketService,
    private readonly createDepositsLeadService: CreateDepositsLeadService,
    private readonly paydDepositsLeadService: PaydDepositsLeadService,
  ) { }

  onModuleInit() {
    this.socketService.on('deposit.created', (data: DepositDto) => {
      this.createDepositsLeadService.execute(data);
    });

    this.socketService.on('deposit.payd', (data: DepositDto) => {
      this.paydDepositsLeadService.execute(data);
    });
  }
}
