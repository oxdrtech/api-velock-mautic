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

    const phoneCountryCode = data.phoneCountryCode?.trim() || '';
    const phoneNumber = data.phone?.trim() || '';
    const phone = `${phoneCountryCode}${phoneNumber}`.trim() || null;

    const updatedPlayer: PlayerLeadDto = {
      externalid: data.externalId,
      afiliado: data.affiliateId,
      firstname,
      lastname,
      email: data.email,
      registrationdate: data.date,
      phone,
      balance: data.balance,
      birthdate: data.birthDate,
      firstdepositdate: data.firstDepositDate,
      firstdepositvalue: data.firstDepositValue,
      lastdepositdate: data.lastDepositDate,
      lastdepositvalue: data.lastDepositValue,
      totaldepositcount: data.totalDepositCount,
      totaldepositvalue: data.totalDepositValue,
      lastwithdrawaldate: data.lastWithdrawalDate,
      lastwithdrawalvalue: data.lastWithdrawalValue,
      totalwithdrawalcount: data.totalWithdrawalCount,
      totalwithdrawalvalue: data.totalWithdrawalValue,
      lastbetdate: null, // tratar no futuro
      lastLoginDate: data.lastLoginDate,
      lastAccessDate: data.lastAccessDate,
      playerStatus: data.playerStatus,
    };

    return await this.playersRepositories.createPlayersLead(updatedPlayer);
  }
}
