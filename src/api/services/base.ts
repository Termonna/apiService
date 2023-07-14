import axios, {
  Axios,
  AxiosError,
  AxiosResponse,
} from 'axios';

import { RESPONSE_CODE } from '@/api/enums';
import {
  IServiceBase,
  TRequestMiddleware,
  TResponseMiddleware,
} from '@/api/types';

const httpClient: Axios = axios;
const unauthorizedCodes: RESPONSE_CODE[] = [RESPONSE_CODE.UNAUTHORIZED, RESPONSE_CODE.AUTHENTICATION_TIMEOUT];

//
// Parent class for all API classes
// Append middlewares, interceptors for httpClient
//
export default class ServiceBase implements IServiceBase {
  protected httpClient: Axios = httpClient;
  protected requestMiddleware: TRequestMiddleware[] = [];
  protected responseMiddleware: TResponseMiddleware[] = [];

  public constructor() {
    this.appendInterceptors();
  }

  //
  // Append middlewares for request
  // @param {middlewares} - array of request middlewares
  //
  public addRequestMiddleware(...middlewares: TRequestMiddleware[]): void {
    this.requestMiddleware.push(...middlewares);
  }

  //
  // Append middlewares for response
  // @param {middlewares} - array of response middlewares
  //
  public addResponseMiddleware(...middlewares: TResponseMiddleware[]): void {
    this.responseMiddleware.push(...middlewares);
  }

  //
  // Append all interceptors to Axios instance
  //
  private appendInterceptors(): void {
    this.httpClient.interceptors.response.use(this.responseInterceptor, this.errorInterceptor);
  }

  //
  // Interceptor for responses
  // @param {response} - response from server
  //
  private responseInterceptor(response: AxiosResponse): AxiosResponse {
    return response;
  }

  //
  // Interceptor to catch errors
  // @param {error} -
  //
  private errorInterceptor(error: AxiosError): Promise<AxiosError> | void {
    if (error?.response?.status === RESPONSE_CODE.FAILED_DEPENDENCY) {
      this.failedDependencyErrorHandler();
    }

    if (error?.response && error.response.status !== RESPONSE_CODE.UNPROCESSABLE_ENTITY) {
      const { data } = error.response;

      console.error(data);
    }

    if (error.response?.status && unauthorizedCodes.includes(error.response.status)) {
      window.location.href = '/auth';
    }

    return Promise.reject(error.response);
  }

  //
  // Handler for process failed dependency error from server
  //
  private failedDependencyErrorHandler(): void {
    console.error('Error!');
  }
}
