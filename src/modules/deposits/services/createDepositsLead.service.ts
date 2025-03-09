import { Inject, Injectable } from "@nestjs/common";
import { DEPOSITS_SERVICE_TOKEN } from "../utils/depositsServiceToken";
import { IDepositsRepositories } from "../domain/repositories/IDeposits.repositories";
import { DepositDto } from "../domain/dto/deposit.dto";
import { PlayerDto } from "src/modules/players/domain/dto/player.dto";
import { PlayerLeadResponseDto } from "src/modules/players/domain/dto/player-lead-response.dto";
import { PlayerLeadDto } from "src/modules/players/domain/dto/player-lead.dto";

@Injectable()
export class CreateDepositsLeadService {
  constructor(
    @Inject(DEPOSITS_SERVICE_TOKEN)
    private readonly depositsRepositories: IDepositsRepositories,
  ) { }

  async execute(data: DepositDto, updatedPlayer: PlayerDto): Promise<PlayerLeadResponseDto> {
    const nameParts = updatedPlayer.name.trim().split(' ');
    const firstname = nameParts.length > 1 ? nameParts[0] : updatedPlayer.name;
    const lastname = nameParts.length > 1 ? nameParts.slice(1).join(' ') : null;

    const newBodyPlayer: PlayerLeadDto = {
      externalid: updatedPlayer.externalId,
      afiliado: updatedPlayer.affiliateId,
      firstname,
      lastname,
      email: updatedPlayer.email,
      registrationdate: updatedPlayer.date,
      phone: updatedPlayer.phone,
      balance: updatedPlayer.balance,
      birthdate: updatedPlayer.birthDate,
      firstdepositdate: updatedPlayer.firstDepositDate,
      firstdepositvalue: updatedPlayer.firstDepositValue,
      lastdepositdate: updatedPlayer.lastDepositDate,
      lastdepositvalue: updatedPlayer.lastDepositValue,
      totaldepositcount: updatedPlayer.totalDepositCount,
      totaldepositvalue: updatedPlayer.totalDepositValue,
      lastwithdrawaldate: updatedPlayer.lastWithdrawalDate,
      lastwithdrawalvalue: updatedPlayer.lastWithdrawalValue,
      totalwithdrawalcount: updatedPlayer.totalWithdrawalCount,
      totalwithdrawalvalue: updatedPlayer.totalWithdrawalValue,
      lastbetdate: null, // tratar no futuro
      lastLoginDate: updatedPlayer.lastLoginDate,
      lastAccessDate: updatedPlayer.lastAccessDate,
      playerStatus: updatedPlayer.playerStatus,
      customObjects: {
        data: [
          {
            alias: 'deposit',
            data: [
              {
                name: 'Depósito',
                attributes: {
                  id: data.transactionId,
                  value: data.amount,
                  status: "pending",
                  method: data.method,
                  datadeposito: data.date,
                  cupom: null, // tratar no futuro
                  firstdeposit: data.isFirstTime,
                },
              },
            ],
          },
        ],
      },
    };

    return await this.depositsRepositories.createDepositsLead(newBodyPlayer);
  }
}
