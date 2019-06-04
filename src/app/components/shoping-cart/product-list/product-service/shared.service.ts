import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MsgService {

  private dataSource = new BehaviorSubject('first newData');
  currentData = this.dataSource.asObservable();

  constructor() { }

  changeData(newData: any) {
    this.dataSource.next(newData)
  }

}