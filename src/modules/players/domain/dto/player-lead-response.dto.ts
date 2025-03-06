export class PlayerLeadResponseDto {
  contact: {
    isPublished: boolean;
    dateAdded: Date;
    createdBy: number;
    createdByUser: string;
    id: number;
    fields: {
      core: {
        email: {
          value: string;
        }
      }
    }
  }
}
