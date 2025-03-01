import { PlayerDto } from "../dto/player.dto";

export interface IPlayersRepositories {
  createPlayersLead(data: PlayerDto): Promise<any>;
}
