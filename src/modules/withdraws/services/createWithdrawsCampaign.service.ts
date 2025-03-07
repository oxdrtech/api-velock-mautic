import { Inject, Injectable } from "@nestjs/common";
import { WITHDRAWS_SERVICE_TOKEN } from "../utils/withdrawsServiceToken";
import { IWithdrawsRepositories } from "../domain/repositories/IWithdraws.repositories";
import { PlayerLeadResponseDto } from "src/modules/players/domain/dto/player-lead-response.dto";

@Injectable()
export class CreateWithdrawsCampaignService {
  constructor(
    @Inject(WITHDRAWS_SERVICE_TOKEN)
    private readonly withdrawsRepositories: IWithdrawsRepositories,
  ) { }

  async execute(data: PlayerLeadResponseDto): Promise<{ success: boolean }> {
    const campaignId = 3;
    const { contact: { id: contactId } } = data;

    return await this.withdrawsRepositories.createWithdrawsCampaign(campaignId, contactId);
  }
}
