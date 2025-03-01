export class WithdrawDto {
  id: string;
  transactionId: string;
  amount: number;
  method: string;
  date: Date;
  currency: string;
  createdAt: Date;
  updatedAt: Date;
  playerId: string;
}

// TODO - adicional | null aos optionais