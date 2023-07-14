import {
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { IPayment } from '@/api/sections/payment/types';
import { IUser } from '@/api/sections/user/types';

export type TResponseWrapper<T> = Promise<AxiosResponse<T>>;
export type TRequestMiddleware = (config: AxiosRequestConfig) => AxiosRequestConfig;
export type TResponseMiddleware = (response: AxiosResponse) => AxiosResponse;

export interface IServiceBase {
  addRequestMiddleware: (...middlewares: TRequestMiddleware[]) => void;
  addResponseMiddleware: (...middlewares: TResponseMiddleware[]) => void;
}

export interface IApiService {
  request: (config: AxiosRequestConfig) => Promise<AxiosResponse>;
}

export interface IApiKit {
  payment: IPayment;
  user: IUser;
}
