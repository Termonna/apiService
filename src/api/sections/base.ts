import { IApiService } from '@/api/types';

//
// Parent class for API sections
// Append api service for child classes
//
export default class SectionBase {
  protected service: IApiService;

  public constructor(service: IApiService) {
    this.service = service;
  }
}
