import { IId, IUserId } from './general';

export interface IUserInfo extends IId {
  firstFame: string;
  lastName: string;
  age: number;
  photo: string;
}

export interface INewPassword extends IUserId {
  password: string;
}
