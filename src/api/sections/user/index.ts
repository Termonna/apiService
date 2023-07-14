import SectionBase from '@/api/sections/base';
import { USER_URL } from '@/api/enums';
import {
  IUser,
} from './types';
import { TResponseWrapper } from '@/api/types';
import { INewPassword, IUserInfo } from '@/interfaces/user';
import { IBooleanResponse, IUserId } from '@/interfaces/general';

export default class User extends SectionBase implements IUser {
  public async getUsers(): TResponseWrapper<IUserInfo[]> {
    return await this.service.request({
      url: USER_URL.GET_USERS,
      method: 'GET',
    });
  }

  public async getUser(data: IUserId): TResponseWrapper<IUserInfo> {
    return await this.service.request({
      url: USER_URL.GET_USER,
      method: 'POST',
      data,
    });
  }

  public async updateUser(data: Partial<IUserInfo>): TResponseWrapper<IBooleanResponse> {
    return await this.service.request({
      url: USER_URL.UPDATE_USER,
      method: 'POST',
      data,
    });
  }

  public async updatePassword(data: INewPassword): TResponseWrapper<IBooleanResponse> {
    return await this.service.request({
      url: USER_URL.UPDATE_PASSWORD,
      method: 'POST',
      data,
    });
  }

  public async deleteUser(data: IUserId): TResponseWrapper<IBooleanResponse> {
    return await this.service.request({
      url: USER_URL.DELETE_USER,
      method: 'POST',
      data,
    });
  }
}
