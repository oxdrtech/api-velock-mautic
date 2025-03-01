import { Inject, Injectable } from "@nestjs/common";
import { WITHDRAWS_SERVICE_TOKEN } from "../utils/withdrawsServiceToken";
import { IWithdrawsRepositories } from "../domain/repositories/IWithdraws.repositories";
import { WithdrawDto } from "../domain/dto/withdraw.dto";

@Injectable()
export class CreateWithdrawsLeadService {
  constructor(
    @Inject(WITHDRAWS_SERVICE_TOKEN)
    private readonly withdrawsRepositories: IWithdrawsRepositories,
  ) { }

  async execute(data: WithdrawDto): Promise<any> {
    console.log('🎉 Novo saque criado:', data);
    // const response = await this.withdrawsRepositories.createWithdrawsLead(data)
    // return response;
  }
}
