import { Inject, Injectable } from "@nestjs/common";
import { PlayerDto } from "../domain/dto/player.dto";
import { IPlayersRepositories } from "../domain/repositories/IPlayers.repositories";
import { PLAYERS_SERVICE_TOKEN } from "../utils/playersServiceToken";

@Injectable()
export class CreatePlayersLeadService {
  constructor(
    @Inject(PLAYERS_SERVICE_TOKEN)
    private readonly playersRepositories: IPlayersRepositories,
  ) { }

  async execute(data: PlayerDto): Promise<any> {
    console.log('🎉 Novo player criado:', data);
    const response = await this.playersRepositories.createPlayersLead(data)
    return response;
  }
}
