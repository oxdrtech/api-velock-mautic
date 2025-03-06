import { Inject, Injectable } from "@nestjs/common";
import { IPlayersRepositories } from "../domain/repositories/IPlayers.repositories";
import { PLAYERS_SERVICE_TOKEN } from "../utils/playersServiceToken";
import { PlayerLeadResponseDto } from "../domain/dto/player-lead-response.dto";

@Injectable()
export class CreatePlayersCampaignService {
  constructor(
    @Inject(PLAYERS_SERVICE_TOKEN)
    private readonly playersRepositories: IPlayersRepositories,
  ) { }

  async execute(data: PlayerLeadResponseDto): Promise<{ success: boolean }> {
    const campaignId = 2;
    const { contact: { id: contactId } } = data;

    return await this.playersRepositories.createPlayersCampaign(campaignId, contactId);
  }
}
