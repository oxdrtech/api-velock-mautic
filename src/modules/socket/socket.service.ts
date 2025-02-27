import { Injectable, OnModuleInit } from '@nestjs/common';
import { io, Socket } from 'socket.io-client';
import { CreatePlayerDto } from '../players/domain/dto/create-player.dto';

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
      console.log(`❌ Desconectado da API1`);
    });
  }

  on(event: string, callback: (data: CreatePlayerDto) => void) {
    this.socket.on(event, callback);
  }
}
