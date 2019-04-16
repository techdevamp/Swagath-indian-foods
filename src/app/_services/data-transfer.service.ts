import { ApiResponse } from 'src/app/_models/api.response';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  apiResponse: ApiResponse;
  constructor() { }

  public setApiResponse(apiResponse: ApiResponse): void {
    this.apiResponse = apiResponse;
  }

  public getApiResponse(): ApiResponse {
    return this.apiResponse;
  }
}
