import { PlayerLeadResponseDto } from "src/modules/players/domain/dto/player-lead-response.dto";
import { PlayerLeadDto } from "src/modules/players/domain/dto/player-lead.dto";

export interface ILoginsRepositories {
  createLoginsLead(data: PlayerLeadDto): Promise<PlayerLeadResponseDto>;
}
