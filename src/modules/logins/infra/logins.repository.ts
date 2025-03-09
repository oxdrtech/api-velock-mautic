import { Injectable } from "@nestjs/common";
import { MauticService } from "src/modules/mautic/mautic.service";
import { ILoginsRepositories } from "../domain/repositories/ILogins.repositories";
import { PlayerLeadResponseDto } from "src/modules/players/domain/dto/player-lead-response.dto";
import { PlayerLeadDto } from "src/modules/players/domain/dto/player-lead.dto";

@Injectable()
export class LoginsRepository implements ILoginsRepositories {
  constructor(
    private readonly MauticService: MauticService,
  ) { }

  createLoginsLead(data: PlayerLeadDto): Promise<PlayerLeadResponseDto> {
    return this.MauticService.createLead(data);
  }
}
