import { DepositDto } from "../dto/deposit.dto";

export interface IDepositsRepositories {
  createDepositsLead(data: DepositDto): Promise<any>;
  createDepositsCampaign(campaignId: number, contactId: number): Promise<{ success: boolean }>;
  paydDepositsLead(data: DepositDto): Promise<any>;
  paydDepositsCampaign(campaignId: number, contactId: number): Promise<{ success: boolean }>;
}
