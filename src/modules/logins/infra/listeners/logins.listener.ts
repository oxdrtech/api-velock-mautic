import { Injectable, OnModuleInit } from '@nestjs/common';
import { SocketService } from '../../../socket/socket.service';
import { LoginDto } from '../../domain/dto/login.dto';

@Injectable()
export class LoginsListener implements OnModuleInit {
  constructor(
    private readonly socketService: SocketService,
  ) { }

  onModuleInit() {
    this.socketService.on('login.created', (data: LoginDto) => {
      console.log('🎉 Novo login criado:', data);
      // Aqui você pode processar os dados recebidos, salvar no banco, etc.
    });
  }
}
