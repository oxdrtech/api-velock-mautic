import { PlayerLeadResponseDto } from "src/modules/players/domain/dto/player-lead-response.dto";
import { PlayerLeadDto } from "src/modules/players/domain/dto/player-lead.dto";

export interface IDepositsRepositories {
  createDepositsLead(data: PlayerLeadDto): Promise<PlayerLeadResponseDto>;
  createDepositsCampaign(campaignId: number, contactId: number): Promise<{ success: boolean }>;
  paydDepositsLead(data: PlayerLeadDto): Promise<PlayerLeadResponseDto>;
  paydDepositsCampaign(campaignId: number, contactId: number): Promise<{ success: boolean }>;
}
