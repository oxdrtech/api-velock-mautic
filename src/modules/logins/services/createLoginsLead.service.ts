import { Inject, Injectable } from "@nestjs/common";
import { LOGINS_SERVICE_TOKEN } from "../utils/loginsServiceToken";
import { ILoginsRepositories } from "../domain/repositories/ILogins.repositories";
import { LoginDto } from "../domain/dto/login.dto";
import { PlayerDto } from "src/modules/players/domain/dto/player.dto";
import { PlayerLeadResponseDto } from "src/modules/players/domain/dto/player-lead-response.dto";

@Injectable()
export class CreateLoginsLeadService {
  constructor(
    @Inject(LOGINS_SERVICE_TOKEN)
    private readonly loginsRepositories: ILoginsRepositories,
  ) { }

  async execute(data: LoginDto, updatedPlayer: PlayerDto): Promise<PlayerLeadResponseDto> {
    return await this.loginsRepositories.createLoginsLead(updatedPlayer);
  }
}
