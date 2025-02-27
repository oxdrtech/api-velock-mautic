import { Injectable, OnModuleInit } from '@nestjs/common';
import { SocketService } from '../../../socket/socket.service';
import { WithdrawDto } from '../../domain/dto/withdraw.dto';

@Injectable()
export class WithdrawsListener implements OnModuleInit {
  constructor(
    private readonly socketService: SocketService,
  ) { }

  onModuleInit() {
    this.socketService.on('withdraw.created', (data: WithdrawDto) => {
      console.log('🎉 Novo saque criado:', data);
      // Aqui você pode processar os dados recebidos, salvar no banco, etc.
    });
  }
}
