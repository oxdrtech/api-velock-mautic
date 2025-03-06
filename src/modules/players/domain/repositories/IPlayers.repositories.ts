import { PlayerLeadDto } from "../dto/player-lead.dto";

export interface IPlayersRepositories {
  createPlayersLead(data: PlayerLeadDto): Promise<any>;
  createPlayersCampaign(idCampaign: number, idContact: number): Promise<any>;
}
