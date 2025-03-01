import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateLoginsLeadService } from '../services/createLoginsLead.service';
import { SocketService } from 'src/modules/socket/socket.service';
import { LoginDto } from '../domain/dto/login.dto';

@Injectable()
export class LoginsListener implements OnModuleInit {
  constructor(
    private readonly socketService: SocketService,
    private readonly createLoginsLeadService: CreateLoginsLeadService,
  ) { }

  onModuleInit() {
    this.socketService.on('login.created', (data: LoginDto) => {
      this.createLoginsLeadService.execute(data);
    });
  }
}
