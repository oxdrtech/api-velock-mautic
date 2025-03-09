import { PlayerDto } from "src/modules/players/domain/dto/player.dto";
import { PlayerLeadResponseDto } from "src/modules/players/domain/dto/player-lead-response.dto";

export interface ILoginsRepositories {
  createLoginsLead(data: PlayerDto): Promise<PlayerLeadResponseDto>;
}
