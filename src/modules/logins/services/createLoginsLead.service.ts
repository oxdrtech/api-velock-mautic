import { Inject, Injectable } from "@nestjs/common";
import { LOGINS_SERVICE_TOKEN } from "../utils/loginsServiceToken";
import { ILoginsRepositories } from "../domain/repositories/ILogins.repositories";
import { LoginDto } from "../domain/dto/login.dto";

@Injectable()
export class CreateLoginsLeadService {
  constructor(
    @Inject(LOGINS_SERVICE_TOKEN)
    private readonly loginsRepositories: ILoginsRepositories,
  ) { }

  async execute(data: LoginDto): Promise<any> {
    console.log('🎉 Novo login criado:', data);
    const response = await this.loginsRepositories.createLoginsLead(data)
    return response;
  }
}
