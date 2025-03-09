import { Inject, Injectable } from "@nestjs/common";
import { WITHDRAWS_SERVICE_TOKEN } from "../utils/withdrawsServiceToken";
import { IWithdrawsRepositories } from "../domain/repositories/IWithdraws.repositories";
import { PlayerLeadResponseDto } from "src/modules/players/domain/dto/player-lead-response.dto";

@Injectable()
export class CreateWithdrawsCampaignService {
  private readonly campaignId: number = Number(process.env.WITHDRAWS_CREATE_CAMPAIGN_ID) || 5;

  constructor(
    @Inject(WITHDRAWS_SERVICE_TOKEN)
    private readonly withdrawsRepositories: IWithdrawsRepositories,
  ) { }

  async execute(data: PlayerLeadResponseDto): Promise<{ success: boolean }> {
    const { contact: { id: contactId } } = data;

    return await this.withdrawsRepositories.createWithdrawsCampaign(this.campaignId, contactId);
  }
}
