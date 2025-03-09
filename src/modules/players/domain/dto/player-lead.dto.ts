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
  lastlogindate: Date | null;
  lastaccessdate: Date | null;
  playerstatus: string;
  customObjects?: {
    data: [
      {
        alias: 'deposit' | 'saque' | 'login';
        data: [
          {
            name: 'Depósito' | 'Saque' | 'login';
            attributes: {
              id?: string | null;
              id1?: string | null;
              value?: number | null;
              value1?: number | null;
              method?: string | null;
              method1?: string | null;
              status?: 'pending' | 'paid' | null;
              cupom?: string | null;
              firstdeposit?: boolean | null;
              ip?: string | null;
              datadeposito?: Date | null;
              datasaque?: Date | null;
              datalogin?: Date | null;
            },
          },
        ],
      },
    ],
  }
}
