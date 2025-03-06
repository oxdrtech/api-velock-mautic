import { PlayerLeadResponseDto } from "../dto/player-lead-response.dto";
import { PlayerLeadDto } from "../dto/player-lead.dto";

export interface IPlayersRepositories {
  createPlayersLead(data: PlayerLeadDto): Promise<PlayerLeadResponseDto>;
  createPlayersCampaign(campaignId: number, contactId: number): Promise<{ success: boolean }>;
}
