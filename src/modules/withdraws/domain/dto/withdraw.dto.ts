export class WithdrawDto {
  id: string;
  transactionId: string;
  amount: number;
  method: string | null;
  date: Date | null;
  currency: string | null;
  createdAt: Date;
  updatedAt: Date;
  playerId: string;
}
