import { ItemDetails } from 'src/app/models/item.details';
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
  itemDetails: BehaviorSubject<ItemDetails>;
  constructor() {
    this.itemsInCart = new BehaviorSubject(0);
    this.apiResponseSub =  new BehaviorSubject<ApiResponse>(new ApiResponse());
    this.itemDetails = new BehaviorSubject<ItemDetails>(new ItemDetails());
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

  public setItemDetails(itemDetails: BehaviorSubject<ItemDetails>): void {
    this.itemDetails = itemDetails;
  }

  public getItemDetails(): BehaviorSubject<ItemDetails> {
    return this.itemDetails;
  }
}
