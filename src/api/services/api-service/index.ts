import {
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

import {
  IApiService,
  TRequestMiddleware,
  TResponseMiddleware,
} from '@/api/types';
import ServiceBase from '@/api/services/base';

//
// Generalized Api Service
// TODO: Add custom configs
//
export default class ApiService extends ServiceBase implements IApiService {
  public async request(config: AxiosRequestConfig): Promise<AxiosResponse> {
    const requestConfig = await this.requestMiddleware.reduce(
      (configVersion: AxiosRequestConfig, middleware: TRequestMiddleware) => middleware(configVersion),
      config
    );

    const response: AxiosResponse = await this.httpClient.request(requestConfig);

    this.responseMiddleware.reduce(
      (responseVersion: AxiosResponse, middleware: TResponseMiddleware) => middleware(responseVersion),
      response
    );

    return response;
  }
}
