import { ApplicationStatusEnum } from "../enum/application-status.enum";

export class Application {
    constructor(
      public id: number = 0,
      public firstname: string = '',
      public lastname: string = '',
      public email: string = '',
      public phonenumber: string = '',
      public numberofpersons: number = 0,
      public date: string = '',
      public traveldistance: string = '',
      public description: string = '',
      public status: ApplicationStatusEnum = ApplicationStatusEnum.Sent
    ) {}
  }
  