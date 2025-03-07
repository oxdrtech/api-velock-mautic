import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class MauticService {
  private readonly mauticBaseUrl = process.env.MAUTIC_BASE_URL || '';
  private readonly username = process.env.MAUTIC_USERNAME || '';
  private readonly password = process.env.MAUTIC_PASSWORD || '';

  constructor(
    private readonly httpService: HttpService,
  ) { }

  async createLead(data: any): Promise<any> {
    const url = `${this.mauticBaseUrl}/contacts/new`;
    const auth = Buffer.from(`${this.username}:${this.password}`).toString('base64');

    try {
      const response = await firstValueFrom(
        this.httpService.post(url, data, {
          headers: {
            Authorization: `Basic ${auth}`,
            'Content-Type': 'application/json',
          },
        })
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao criar lead no Mautic:', error.response?.data || error.message);
      throw error;
    }
  }

  async createCampaign(campaignId: number, contactId: number): Promise<any> {
    const url = `${this.mauticBaseUrl}/campaigns/${campaignId}/contact/${contactId}/add`;
    const auth = Buffer.from(`${this.username}:${this.password}`).toString('base64');

    try {
      const response = await firstValueFrom(
        this.httpService.post(url, {}, {
          headers: {
            Authorization: `Basic ${auth}`,
            'Content-Type': 'application/json',
          },
        })
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao criar campanha no Mautic:', error.response?.data || error.message);
      throw error;
    }
  }

  async customCreate(data: any): Promise<any> {
    const url = `${this.mauticBaseUrl}/url...`;
    const auth = Buffer.from(`${this.username}:${this.password}`).toString('base64');

    try {
      const response = await firstValueFrom(
        this.httpService.post(url, {}, {
          headers: {
            Authorization: `Basic ${auth}`,
            'Content-Type': 'application/json',
          },
        })
      );
      return response.data;
    } catch (error) {
      // console.error('Erro ao criar campanha no Mautic:', error.response?.data || error.message);
      console.error('Erro ao criar campanha no Mautic');
      // throw error;
    }
  }
}
