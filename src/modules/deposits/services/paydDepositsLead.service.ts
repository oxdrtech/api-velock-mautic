import { Inject, Injectable } from "@nestjs/common";
import { DEPOSITS_SERVICE_TOKEN } from "../utils/depositsServiceToken";
import { IDepositsRepositories } from "../domain/repositories/IDeposits.repositories";
import { DepositDto } from "../domain/dto/deposit.dto";
import { PlayerDto } from "src/modules/players/domain/dto/player.dto";
import { PlayerLeadResponseDto } from "src/modules/players/domain/dto/player-lead-response.dto";
import { PlayerLeadDto } from "src/modules/players/domain/dto/player-lead.dto";

@Injectable()
export class PaydDepositsLeadService {
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
      balance: updatedPlayer.balance / 100,
      birthdate: updatedPlayer.birthDate,
      firstdepositdate: updatedPlayer.firstDepositDate,
      firstdepositvalue: updatedPlayer.firstDepositValue ? updatedPlayer.firstDepositValue / 100 : null,
      lastdepositdate: updatedPlayer.lastDepositDate,
      lastdepositvalue: updatedPlayer.lastDepositValue ? updatedPlayer.lastDepositValue / 100 : null,
      totaldepositcount: updatedPlayer.totalDepositCount,
      totaldepositvalue: updatedPlayer.totalDepositValue ? updatedPlayer.totalDepositValue / 100 : null,
      lastwithdrawaldate: updatedPlayer.lastWithdrawalDate,
      lastwithdrawalvalue: updatedPlayer.lastWithdrawalValue ? updatedPlayer.lastWithdrawalValue / 100 : null,
      totalwithdrawalcount: updatedPlayer.totalWithdrawalCount,
      totalwithdrawalvalue: updatedPlayer.totalWithdrawalValue ? updatedPlayer.totalWithdrawalValue / 100 : null,
      lastbetdate: null, // tratar no futuro
      lastlogindate: updatedPlayer.lastLoginDate,
      lastaccessdate: updatedPlayer.lastAccessDate,
      playerstatus: updatedPlayer.playerStatus,
      customObjects: {
        data: [
          {
            alias: 'deposit',
            data: [
              {
                name: 'Depósito',
                attributes: {
                  id: data.transactionId,
                  value: data.amount / 100,
                  status: "paid",
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
