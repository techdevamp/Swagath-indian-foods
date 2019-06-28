import { BehaviorSubject } from 'rxjs';
import { ApiResponse } from 'src/app/models/api.response';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  apiResponse: ApiResponse;
  itemsInCart: BehaviorSubject<number>;
  apiResponseSub: BehaviorSubject<ApiResponse>;
  constructor() {
    this.itemsInCart = new BehaviorSubject(0);
    this.apiResponseSub =  new BehaviorSubject<ApiResponse>(new ApiResponse());
  }

  public setApiResponse(apiResponse: ApiResponse): void {
    this.apiResponse = apiResponse;
  }

  public getApiResponse(): ApiResponse {
    return this.apiResponse;
  }

  public setItemsInCart(itemsInCart: BehaviorSubject<number>): void {
    this.itemsInCart = itemsInCart;
  }

  public getItemsInCart(): BehaviorSubject<number> {
    return this.itemsInCart;
  }

  public setApiResponseSub(apiResponseSub: BehaviorSubject<ApiResponse>): void {
    this.apiResponseSub = apiResponseSub;
  }

  public getApiResponseSub(): BehaviorSubject<ApiResponse> {
    return this.apiResponseSub;
  }

}
