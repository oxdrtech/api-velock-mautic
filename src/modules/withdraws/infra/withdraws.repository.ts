import { Injectable } from "@nestjs/common";
import { MauticService } from "src/modules/mautic/mautic.service";
import { IWithdrawsRepositories } from "../domain/repositories/IWithdraws.repositories";
import { PlayerLeadResponseDto } from "src/modules/players/domain/dto/player-lead-response.dto";
import { PlayerLeadDto } from "src/modules/players/domain/dto/player-lead.dto";

@Injectable()
export class WithdrawsRepository implements IWithdrawsRepositories {
  constructor(
    private readonly MauticService: MauticService,
  ) { }

  createWithdrawsLead(data: PlayerLeadDto): Promise<PlayerLeadResponseDto> {
    return this.MauticService.createLead(data);
  }

  createWithdrawsCampaign(campaignId: number, contactId: number): Promise<{ success: boolean; }> {
    return this.MauticService.createCampaign(campaignId, contactId);
  }
}
