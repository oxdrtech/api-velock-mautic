import { Injectable } from "@nestjs/common";
import { IDepositsRepositories } from "../domain/repositories/IDeposits.repositories";
import { MauticService } from "src/modules/mautic/mautic.service";
import { PlayerLeadResponseDto } from "src/modules/players/domain/dto/player-lead-response.dto";
import { PlayerLeadDto } from "src/modules/players/domain/dto/player-lead.dto";

@Injectable()
export class DepositsRepository implements IDepositsRepositories {
  constructor(
    private readonly MauticService: MauticService,
  ) { }

  createDepositsLead(data: PlayerLeadDto): Promise<PlayerLeadResponseDto> {
    return this.MauticService.createLead(data);
  }

  createDepositsCampaign(campaignId: number, contactId: number): Promise<{ success: boolean }> {
    return this.MauticService.createCampaign(campaignId, contactId);
  }

  paydDepositsLead(data: PlayerLeadDto): Promise<PlayerLeadResponseDto> {
    return this.MauticService.createLead(data);
  }

  paydDepositsCampaign(campaignId: number, contactId: number): Promise<{ success: boolean; }> {
    return this.MauticService.createCampaign(campaignId, contactId);
  }
}
