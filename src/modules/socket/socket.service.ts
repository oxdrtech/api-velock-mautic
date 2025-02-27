import { Injectable, OnModuleInit } from '@nestjs/common';
import { io, Socket } from 'socket.io-client';
import { DepositDto } from '../deposits/domain/dto/deposit.dto';
import { PlayerDto } from '../players/domain/dto/player.dto';
import { WithdrawDto } from '../withdraws/domain/dto/withdraw.dto';

@Injectable()
export class SocketService implements OnModuleInit {
  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:8080'); // URL da API1
  }

  onModuleInit() {
    this.socket.on('connect', () => {
      console.log(`✅ Conectado ao WebSocket da API1 - ID: ${this.socket.id}`);
    });

    this.socket.on('disconnect', () => {
      console.log(`❌ Desconectado da API`);
    });
  }

  on(event: string, callback: (data: PlayerDto | DepositDto | WithdrawDto) => void) {
    this.socket.on(event, callback);
  }
}
