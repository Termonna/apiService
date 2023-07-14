import { TResponseWrapper } from '@/api/types';
import { INewPassword, IUserInfo } from '@/interfaces/user';
import { IBooleanResponse, IUserId } from '@/interfaces/general';

export interface IUser {
  getUsers: () => TResponseWrapper<IUserInfo[]>;

  getUser: (data: IUserId) => TResponseWrapper<IUserInfo>;

  updateUser: (data: Partial<IUserInfo>) => TResponseWrapper<IBooleanResponse>;

  updatePassword: (data: INewPassword) => TResponseWrapper<IBooleanResponse>;

  deleteUser: (data: IUserId) => TResponseWrapper<IBooleanResponse>;
}
