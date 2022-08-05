import { ApplicationStatusEnum } from "../enum/application-status.enum";
import { TransportTypeEnum } from "../enum/transport-type.enum";

export class Application {
    constructor(
      public id: number = 0,
      public firstname: string = '',
      public lastname: string = '',
      public email: string = '',
      public phonenumber: string = '',
      public numberofpassengers: number = 0,
      public startdate: string = '',
      public enddate: string = '',
      public travelroute: string = '',
      public description: string = '',
      public status: ApplicationStatusEnum = ApplicationStatusEnum.Sent,
      public transporttype: TransportTypeEnum = TransportTypeEnum.PassangersTransport,
      public vehicle: string = '',
      public price: number = 0,
      public discount: number = 0
    ) {}
  }
  