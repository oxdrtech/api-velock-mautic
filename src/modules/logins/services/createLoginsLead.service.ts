import { Inject, Injectable } from "@nestjs/common";
import { LOGINS_SERVICE_TOKEN } from "../utils/loginsServiceToken";
import { ILoginsRepositories } from "../domain/repositories/ILogins.repositories";
import { LoginDto } from "../domain/dto/login.dto";
import { PlayerDto } from "src/modules/players/domain/dto/player.dto";
import { PlayerLeadResponseDto } from "src/modules/players/domain/dto/player-lead-response.dto";
import { PlayerLeadDto } from "src/modules/players/domain/dto/player-lead.dto";

@Injectable()
export class CreateLoginsLeadService {
  constructor(
    @Inject(LOGINS_SERVICE_TOKEN)
    private readonly loginsRepositories: ILoginsRepositories,
  ) { }

  async execute(data: LoginDto, updatedPlayer: PlayerDto): Promise<PlayerLeadResponseDto> {
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
            alias: 'login',
            data: [
              {
                name: 'login',
                attributes: {
                  ip: data.ipAddress,
                  datalogin: data.date,
                },
              },
            ],
          },
        ],
      },
    };

    return await this.loginsRepositories.createLoginsLead(newBodyPlayer);
  }
}
