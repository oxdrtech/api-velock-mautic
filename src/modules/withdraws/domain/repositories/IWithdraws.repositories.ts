import { WithdrawDto } from "../dto/withdraw.dto";

export interface IWithdrawsRepositories {
  createWithdrawsLead(data: WithdrawDto): Promise<any>;
  createWithdrawsCampaign(campaignId: number, contactId: number): Promise<{ success: boolean }>;
}
