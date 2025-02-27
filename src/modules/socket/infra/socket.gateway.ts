import { SubscribeMessage, WebSocketGateway, OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway({
  cors: {
    origin: '*', // Permite conexões de qualquer lugar (ajuste conforme necessário)
  },
})
export class SocketGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private logger: Logger = new Logger('SocketGateway');

  afterInit(server: Server) {
    this.logger.log('✅ WebSocket inicializado!');
  }

  handleConnection(client: Socket) {
    this.logger.log(`🔵 Cliente conectado: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`🔴 Cliente desconectado: ${client.id}`);
  }

  @SubscribeMessage('player_created')
  handlePlayerCreated(client: Socket, payload: any) {
    this.logger.log(`🎯 Evento recebido: player_created -> ${JSON.stringify(payload)}`);
  }
}
