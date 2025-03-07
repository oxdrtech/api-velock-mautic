import { Inject, Injectable } from "@nestjs/common";
import { DEPOSITS_SERVICE_TOKEN } from "../utils/depositsServiceToken";
import { IDepositsRepositories } from "../domain/repositories/IDeposits.repositories";
import { DepositDto } from "../domain/dto/deposit.dto";
import { PlayerDto } from "src/modules/players/domain/dto/player.dto";
import { PlayerLeadResponseDto } from "src/modules/players/domain/dto/player-lead-response.dto";
import { PLAYERS_SERVICE_TOKEN } from "src/modules/players/utils/playersServiceToken";
import { IPlayersRepositories } from "src/modules/players/domain/repositories/IPlayers.repositories";
import { PlayerLeadDto } from "src/modules/players/domain/dto/player-lead.dto";

@Injectable()
export class CreateDepositsLeadService {
  constructor(
    @Inject(DEPOSITS_SERVICE_TOKEN)
    private readonly depositsRepositories: IDepositsRepositories,
    @Inject(PLAYERS_SERVICE_TOKEN)
    private readonly playersRepositories: IPlayersRepositories,
  ) { }

  async execute(data: DepositDto, updatedPlayerData?: PlayerDto): Promise<PlayerLeadResponseDto> {

    // CRIA O DEPOSITO
    await this.depositsRepositories.createDepositsLead(data);


    // ATUALIZA O CONTATO
    const nameParts = updatedPlayerData.name.trim().split(' ');
    const firstname = nameParts.length > 1 ? nameParts[0] : updatedPlayerData.name;
    const lastname = nameParts.length > 1 ? nameParts.slice(1).join(' ') : null;

    const phoneCountryCode = updatedPlayerData.phoneCountryCode?.trim() || '';
    const phoneNumber = updatedPlayerData.phone?.trim() || '';
    const phone = `${phoneCountryCode}${phoneNumber}`.trim() || null;

    const updatedPlayer: PlayerLeadDto = {
      externalid: updatedPlayerData.externalId,
      afiliado: updatedPlayerData.affiliateId,
      firstname,
      lastname,
      email: updatedPlayerData.email,
      registrationdate: updatedPlayerData.date,
      phone,
      balance: updatedPlayerData.balance,
      birthdate: updatedPlayerData.birthDate,
      firstdepositdate: updatedPlayerData.firstDepositDate,
      firstdepositvalue: updatedPlayerData.firstDepositValue,
      lastdepositdate: updatedPlayerData.lastDepositDate,
      lastdepositvalue: updatedPlayerData.lastDepositValue,
      totaldepositcount: updatedPlayerData.totalDepositCount,
      totaldepositvalue: updatedPlayerData.totalDepositValue,
      lastwithdrawaldate: updatedPlayerData.lastWithdrawalDate,
      lastwithdrawalvalue: updatedPlayerData.lastWithdrawalValue,
      totalwithdrawalcount: updatedPlayerData.totalWithdrawalCount,
      totalwithdrawalvalue: updatedPlayerData.totalWithdrawalValue,
      lastbetdate: null, // tratar no futuro
      lastLoginDate: updatedPlayerData.lastLoginDate,
      lastAccessDate: updatedPlayerData.lastAccessDate,
      playerStatus: updatedPlayerData.playerStatus,
    };

    return await this.playersRepositories.createPlayersLead(updatedPlayer);
  }
}
