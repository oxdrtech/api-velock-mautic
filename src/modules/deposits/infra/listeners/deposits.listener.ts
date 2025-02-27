import { Injectable, OnModuleInit } from '@nestjs/common';
import { SocketService } from '../../../socket/socket.service';
import { DepositDto } from '../../domain/dto/deposit.dto';

@Injectable()
export class DepositsListener implements OnModuleInit {
  constructor(
    private readonly socketService: SocketService,
  ) { }

  onModuleInit() {
    this.socketService.on('deposit.created', (data: DepositDto) => {
      console.log('🎉 Novo deposito criado:', data);
      // Aqui você pode processar os dados recebidos, salvar no banco, etc.
    });

    this.socketService.on('deposit.payd', (data: DepositDto) => {
      console.log('🎉 Novo deposito pago:', data);
      // Aqui você pode processar os dados recebidos, salvar no banco, etc.
    });
  }
}
