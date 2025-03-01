import { Injectable } from "@nestjs/common";
import { IPlayersRepositories } from "../domain/repositories/IPlayers.repositories";
import { MauticService } from "src/modules/mautic/mautic.service";
import { PlayerLeadDto } from "../domain/dto/player-lead.dto";

@Injectable()
export class PlayersRepository implements IPlayersRepositories {
  constructor(
    private readonly MauticService: MauticService,
  ) { }

  createPlayersLead(data: PlayerLeadDto): Promise<any> {
    return this.MauticService.createLead(data);
  }
}
