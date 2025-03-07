import { Injectable } from "@nestjs/common";
import { MauticService } from "src/modules/mautic/mautic.service";
import { IWithdrawsRepositories } from "../domain/repositories/IWithdraws.repositories";
import { WithdrawDto } from "../domain/dto/withdraw.dto";

@Injectable()
export class WithdrawsRepository implements IWithdrawsRepositories {
  constructor(
    private readonly MauticService: MauticService,
  ) { }

  createWithdrawsLead(data: WithdrawDto): Promise<any> {
    return this.MauticService.customCreate(data);
  }

  createWithdrawsCampaign(campaignId: number, contactId: number): Promise<{ success: boolean; }> {
    return this.MauticService.createCampaign(campaignId, contactId);
  }
}
