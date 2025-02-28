import { Injectable } from "@nestjs/common";
import { IPlayersRepositories } from "../domain/repositories/IPlayers.repositories";
import { MauticService } from "src/modules/mautic/mautic.service";
import { PlayerDto } from "../domain/dto/player.dto";

@Injectable()
export class PlayersRepository implements IPlayersRepositories {
  constructor(
    private readonly MauticService: MauticService,
  ) { }

  createPlayersLead(data: PlayerDto): Promise<any> {
    return this.MauticService.createLead(data);
  }
}
