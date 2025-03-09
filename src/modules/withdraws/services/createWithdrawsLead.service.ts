import { Inject, Injectable } from "@nestjs/common";
import { WITHDRAWS_SERVICE_TOKEN } from "../utils/withdrawsServiceToken";
import { IWithdrawsRepositories } from "../domain/repositories/IWithdraws.repositories";
import { WithdrawDto } from "../domain/dto/withdraw.dto";
import { PlayerDto } from "src/modules/players/domain/dto/player.dto";
import { PlayerLeadResponseDto } from "src/modules/players/domain/dto/player-lead-response.dto";
import { PlayerLeadDto } from "src/modules/players/domain/dto/player-lead.dto";

@Injectable()
export class CreateWithdrawsLeadService {
  constructor(
    @Inject(WITHDRAWS_SERVICE_TOKEN)
    private readonly withdrawsRepositories: IWithdrawsRepositories,
  ) { }

  async execute(data: WithdrawDto, updatedPlayer: PlayerDto): Promise<PlayerLeadResponseDto> {
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
            alias: 'saque',
            data: [
              {
                name: 'Saque',
                attributes: {
                  id1: data.transactionId,
                  value1: data.amount,
                  method1: data.method,
                  datasaque: data.date,
                },
              },
            ],
          },
        ],
      },
    };

    return await this.withdrawsRepositories.createWithdrawsLead(newBodyPlayer);
  }
}
