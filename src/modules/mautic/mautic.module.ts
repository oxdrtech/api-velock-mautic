import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MauticService } from './mautic.service';

@Module({
  imports: [
    HttpModule,
  ],
  providers: [
    MauticService
  ],
  exports: [
    MauticService,
  ],
})
export class MauticModule { }
