import { Injectable } from "@nestjs/common";
import { IPlayersRepositories } from "../domain/repositories/IPlayers.repositories";
import { MauticService } from "src/modules/mautic/mautic.service";
import { PlayerLeadDto } from "../domain/dto/player-lead.dto";

@Injectable()
export class PlayersRepository implements IPlayersRepositories {
  constructor(
    private readonly MauticService: MauticService,
  ) { }

  // TODO - adicionar tipo do retorno
  createPlayersLead(data: PlayerLeadDto): Promise<any> {
    return this.MauticService.createLead(data);
  }

  // TODO - adicionar tipo do retorno
  createPlayersCampaign(idCampaign: number, idContact: number): Promise<any> {
    return this.MauticService.createCampaign(idCampaign, idContact)
  }
}
