import { Inject, Injectable } from "@nestjs/common";
import { DEPOSITS_SERVICE_TOKEN } from "../utils/depositsServiceToken";
import { IDepositsRepositories } from "../domain/repositories/IDeposits.repositories";
import { PlayerLeadResponseDto } from "src/modules/players/domain/dto/player-lead-response.dto";

@Injectable()
export class CreateDepositsCampaignService {
  constructor(
    @Inject(DEPOSITS_SERVICE_TOKEN)
    private readonly depositsRepositories: IDepositsRepositories,
  ) { }

  async execute(data: PlayerLeadResponseDto): Promise<{ success: boolean }> {
    const campaignId = 3;
    const { contact: { id: contactId } } = data;

    return await this.depositsRepositories.createDepositsCampaign(campaignId, contactId);
  }
}
