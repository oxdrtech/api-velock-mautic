import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class PlayerListener {
  private readonly logger = new Logger(PlayerListener.name);

  @OnEvent('player_created')
  handlePlayerCreated(payload: any) {
    this.logger.log(`Novo player criado: ${JSON.stringify(payload)}`);
    console.log('payload', payload)
    // Aqui você pode processar os dados, armazenar no banco, chamar outras APIs, etc.
  }
}
