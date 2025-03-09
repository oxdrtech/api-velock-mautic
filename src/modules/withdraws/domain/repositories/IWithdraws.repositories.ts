import { PlayerLeadDto } from "src/modules/players/domain/dto/player-lead.dto";
import { PlayerLeadResponseDto } from "src/modules/players/domain/dto/player-lead-response.dto";

export interface IWithdrawsRepositories {
  createWithdrawsLead(data: PlayerLeadDto): Promise<PlayerLeadResponseDto>;
  createWithdrawsCampaign(campaignId: number, contactId: number): Promise<{ success: boolean }>;
}
