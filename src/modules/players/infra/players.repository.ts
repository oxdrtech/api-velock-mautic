import { Injectable } from "@nestjs/common";
import { IPlayersRepositories } from "../domain/repositories/IPlayers.repositories";
import { MauticService } from "src/modules/mautic/mautic.service";
import { PlayerLeadDto } from "../domain/dto/player-lead.dto";
import { PlayerLeadResponseDto } from "../domain/dto/player-lead-response.dto";

@Injectable()
export class PlayersRepository implements IPlayersRepositories {
  constructor(
    private readonly MauticService: MauticService,
  ) { }

  createPlayersLead(data: PlayerLeadDto): Promise<PlayerLeadResponseDto> {
    return this.MauticService.createLead(data);
  }

  createPlayersCampaign(campaignId: number, contactId: number): Promise<{ success: boolean }> {
    return this.MauticService.createCampaign(campaignId, contactId);
  }
}
