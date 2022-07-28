import { UserTypeEnum } from "../enum/user-type.enum";

export class User {
    constructor(
      public fisrtname: string = '',
      public lastname: string = '',
      public email: string = '',
      public password: string = '',
      public phonenumber: string = '',
      public type: UserTypeEnum = UserTypeEnum.Basic
    ) {}
  }
  