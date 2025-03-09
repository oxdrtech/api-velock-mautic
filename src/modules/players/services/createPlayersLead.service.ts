import { Inject, Injectable } from "@nestjs/common";
import { PlayerDto } from "../domain/dto/player.dto";
import { IPlayersRepositories } from "../domain/repositories/IPlayers.repositories";
import { PLAYERS_SERVICE_TOKEN } from "../utils/playersServiceToken";
import { PlayerLeadDto } from "../domain/dto/player-lead.dto";
import { PlayerLeadResponseDto } from "../domain/dto/player-lead-response.dto";

@Injectable()
export class CreatePlayersLeadService {
  constructor(
    @Inject(PLAYERS_SERVICE_TOKEN)
    private readonly playersRepositories: IPlayersRepositories,
  ) { }

  async execute(data: PlayerDto): Promise<PlayerLeadResponseDto> {
    const nameParts = data.name.trim().split(' ');
    const firstname = nameParts.length > 1 ? nameParts[0] : data.name;
    const lastname = nameParts.length > 1 ? nameParts.slice(1).join(' ') : null;

    const updatedPlayer: PlayerLeadDto = {
      externalid: data.externalId,
      afiliado: data.affiliateId,
      firstname,
      lastname,
      email: data.email,
      registrationdate: data.date,
      phone: data.phone,
      balance: data.balance,
      birthdate: data.birthDate,
      firstdepositdate: data.firstDepositDate,
      firstdepositvalue: data.firstDepositValue ?? 0,
      lastdepositdate: data.lastDepositDate,
      lastdepositvalue: data.lastDepositValue ?? 0,
      totaldepositcount: data.totalDepositCount ?? 0,
      totaldepositvalue: data.totalDepositValue ?? 0,
      lastwithdrawaldate: data.lastWithdrawalDate,
      lastwithdrawalvalue: data.lastWithdrawalValue ?? 0,
      totalwithdrawalcount: data.totalWithdrawalCount ?? 0,
      totalwithdrawalvalue: data.totalWithdrawalValue ?? 0,
      lastbetdate: null, // tratar no futuro
      lastlogindate: data.lastLoginDate,
      lastaccessdate: data.lastAccessDate,
      playerstatus: data.playerStatus,
    };

    return await this.playersRepositories.createPlayersLead(updatedPlayer);
  }
}
