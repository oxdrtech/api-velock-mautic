export class PlayerLeadDto {
  externalid: string;
  afiliado: string | null;
  firstname: string | null;
  lastname: string | null;
  email: string;
  registrationdate: Date | null;
  phone: string | null;
  balance: number;
  birthdate: Date | null;
  firstdepositdate: Date | null;
  firstdepositvalue: number | null;
  lastdepositdate: Date | null;
  lastdepositvalue: number | null;
  totaldepositcount: number | null;
  totaldepositvalue: number | null;
  lastwithdrawaldate: Date | null;
  lastwithdrawalvalue: number | null;
  totalwithdrawalcount: number | null;
  totalwithdrawalvalue: number | null;
  lastbetdate: Date | null;
  lastLoginDate: Date | null;
  lastAccessDate: Date | null;
  playerStatus: string;
}
