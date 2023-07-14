import {
  IApiKit,
  IApiService,
} from '@/api/types';
import Payment from '@/api/sections/payment';
import { IPayment } from '@/api/sections/payment/types';
import User from '@/api/sections/user';
import { IUser } from '@/api/sections/user/types';

//
// Entry point for all APIs in project
// @param {service} - api service instance
//
export default class ApiKit implements IApiKit {
  public payment: IPayment;
  public user: IUser;

  private readonly service: IApiService;

  public constructor(service: IApiService) {
    this.service = service;

    this.payment = new Payment(service);
    this.user = new User(service);
  }
}
