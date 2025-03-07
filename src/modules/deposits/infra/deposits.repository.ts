import { Injectable } from "@nestjs/common";
import { IDepositsRepositories } from "../domain/repositories/IDeposits.repositories";
import { MauticService } from "src/modules/mautic/mautic.service";
import { DepositDto } from "../domain/dto/deposit.dto";

@Injectable()
export class DepositsRepository implements IDepositsRepositories {
  constructor(
    private readonly MauticService: MauticService,
  ) { }

  createDepositsLead(data: DepositDto): Promise<any> {
    return this.MauticService.customCreate(data); // TODO - trabalhar aqui
  }

  createDepositsCampaign(campaignId: number, contactId: number): Promise<{ success: boolean }> {
    return this.MauticService.createCampaign(campaignId, contactId);
  }

  paydDepositsLead(data: DepositDto): Promise<any> {
    return this.MauticService.createLead(data);
  }

  paydDepositsCampaign(campaignId: number, contactId: number): Promise<{ success: boolean; }> {
    return this.MauticService.createCampaign(campaignId, contactId);
  }
}
