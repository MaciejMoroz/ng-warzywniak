import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {

  private dataSource = new BehaviorSubject('newData');
  currentData = this.dataSource.asObservable();

  private paySource = new BehaviorSubject('newPay')
  currentPay = this.paySource.asObservable();

  constructor() { }

  changeData(newData: any) {
    this.dataSource.next(newData)
  }
  changePay(newPay: any) {
    this.paySource.next(newPay)
  }


}