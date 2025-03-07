import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { io, Socket } from 'socket.io-client';
import { DepositDto } from '../deposits/domain/dto/deposit.dto';
import { PlayerDto } from '../players/domain/dto/player.dto';
import { WithdrawDto } from '../withdraws/domain/dto/withdraw.dto';
import { LoginDto } from '../logins/domain/dto/login.dto';

@Injectable()
export class SocketService implements OnModuleInit {
  private socket: Socket;
  private logger: Logger = new Logger('SocketService');
  private readonly API_WEBHOOK = process.env.API_WEBHOOK_URL || "";

  constructor() {
    this.socket = io(this.API_WEBHOOK);
  }

  onModuleInit() {
    this.socket.on('connect', () => {
      this.logger.log(`✅ Conectado ao WebSocket da api-velock-webhook - ID: ${this.socket.id}`);
    });

    this.socket.on('disconnect', () => {
      this.logger.log(`❌ Desconectado da api-velock-webhook`);
    });
  }

  on(event: string, callback: (data: { data: PlayerDto | DepositDto | WithdrawDto | LoginDto, updatedPlayerData?: PlayerDto }) => void) {
    this.socket.on(event, callback);
  }
}
