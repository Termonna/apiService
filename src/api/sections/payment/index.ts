import SectionBase from '@/api/sections/base';
import { PAYMENT_URL } from '@/api/enums';
import {
  IPayment,
} from './types';
import { TResponseWrapper } from '@/api/types';
import { IBooleanResponse, IUserId } from '@/interfaces/general';
import { IBalance, ICreditCard, IPayPayload } from '@/interfaces/payment';

export default class Payment extends SectionBase implements IPayment {
  public async getBalance(data: IUserId): TResponseWrapper<IBalance> {
    return await this.service.request({
      url: PAYMENT_URL.GET_BALANCE,
      method: 'POST',
      data,
    });
  }

  public async pay(data: IPayPayload): TResponseWrapper<IBooleanResponse> {
    return await this.service.request({
      url: PAYMENT_URL.PAY,
      method: 'POST',
      data,
    });
  }

  public async addCard(data: ICreditCard): TResponseWrapper<IBooleanResponse> {
    return await this.service.request({
      url: PAYMENT_URL.ADD_CARD,
      method: 'POST',
      data,
    });
  }

  public async validateCard(data: ICreditCard): TResponseWrapper<IBooleanResponse> {
    return await this.service.request({
      url: PAYMENT_URL.VALIDATE_CARD,
      method: 'POST',
      data,
    });
  }
}
