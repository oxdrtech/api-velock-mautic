import { Inject, Injectable } from "@nestjs/common";
import { DEPOSITS_SERVICE_TOKEN } from "../utils/depositsServiceToken";
import { IDepositsRepositories } from "../domain/repositories/IDeposits.repositories";
import { DepositDto } from "../domain/dto/deposit.dto";

@Injectable()
export class PaydDepositsLeadService {
  constructor(
    @Inject(DEPOSITS_SERVICE_TOKEN)
    private readonly depositsRepositories: IDepositsRepositories,
  ) { }

  async execute(data: DepositDto): Promise<any> {
    return await this.depositsRepositories.paydDepositsLead(data);
  }
}
