import { ApplicationStatusEnum } from "../enum/application-status.enum";

export class Application {
    constructor(
      public id: number = 0,
      public firstname: string = '',
      public lastname: string = '',
      public email: string = '',
      public phonenumber: string = '',
      public numberofpassengers: number = 0,
      public date: string = '',
      public travelroute: string = '',
      public description: string = '',
      public status: ApplicationStatusEnum = ApplicationStatusEnum.Sent
    ) {}
  }
  