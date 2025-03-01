import { LoginDto } from "../dto/login.dto";

export interface ILoginsRepositories {
  createLoginsLead(data: LoginDto): Promise<any>;
}
