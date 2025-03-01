export class DepositDto {
  id: string;
  transactionId: string;
  amount: number;
  method: string | null;
  date: Date | null;
  currency: string | null;
  isFirstTime: boolean;
  depositStatus: String;
  createdAt: Date;
  updatedAt: Date;
  playerId: string;
}
