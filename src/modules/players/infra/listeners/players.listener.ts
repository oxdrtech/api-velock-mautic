import { Injectable, OnModuleInit } from '@nestjs/common';
import { SocketService } from '../../../socket/socket.service';
import { PlayerDto } from '../../domain/dto/player.dto';

@Injectable()
export class PlayersListener implements OnModuleInit {
  constructor(
    private readonly socketService: SocketService,
  ) { }

  onModuleInit() {
    this.socketService.on('player.created', (data: PlayerDto) => {
      console.log('🎉 Novo player criado:', data);
      // Aqui você pode processar os dados recebidos, salvar no banco, etc.
    });
  }
}
