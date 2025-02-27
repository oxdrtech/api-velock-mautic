export class DepositDto {
  id: string;
  transactionId: string;
  amount: number;
  method: string;
  date: Date;
  currency: string;
  isFirstTime: boolean;
  depositStatus: String;
  createdAt: Date;
  updatedAt: Date;
  playerId: string;
}
