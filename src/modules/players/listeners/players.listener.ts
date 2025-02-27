import { Injectable, OnModuleInit } from '@nestjs/common';
import { SocketService } from '../../socket/socket.service';
import { CreatePlayerDto } from '../domain/dto/create-player.dto';

@Injectable()
export class PlayersListener implements OnModuleInit {
  constructor(
    private readonly socketService: SocketService,
  ) { }

  onModuleInit() {
    this.socketService.on('player.created', (data: CreatePlayerDto) => {
      console.log('🎉 Novo player criado:', data);
      // Aqui você pode processar os dados recebidos, salvar no banco, etc.
    });
  }
}
