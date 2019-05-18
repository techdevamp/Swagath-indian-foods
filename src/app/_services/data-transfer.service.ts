import { Observable, BehaviorSubject } from 'rxjs';
import { ApiResponse } from 'src/app/_models/api.response';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  apiResponse: ApiResponse;
  itemsInCart: BehaviorSubject<number>;
  constructor() {
    this.itemsInCart = new BehaviorSubject(0);
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
}
