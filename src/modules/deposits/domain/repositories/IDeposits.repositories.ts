import { DepositDto } from "../dto/deposit.dto";

export interface IDepositsRepositories {
  createDepositsLead(data: DepositDto): Promise<any>;
  paydDepositsLead(data: DepositDto): Promise<any>;
}
