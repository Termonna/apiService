import { TResponseWrapper } from '@/api/types';
import { IBooleanResponse, IUserId } from '@/interfaces/general';
import { IBalance, ICreditCard, IPayPayload } from '@/interfaces/payment';

export interface IPayment {
  getBalance: (data: IUserId) => TResponseWrapper<IBalance>;

  pay: (data: IPayPayload) => TResponseWrapper<IBooleanResponse>;

  addCard: (data: ICreditCard) => TResponseWrapper<IBooleanResponse>;

  validateCard: (data: ICreditCard) => TResponseWrapper<IBooleanResponse>;
}
