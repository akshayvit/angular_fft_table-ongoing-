import { Injectable } from '@angular/core';
import {InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BackendService implements InMemoryDbService{

  constructor() { }
  createDb(reqInfo?: RequestInfo | undefined): {} | Observable<{}> | Promise<{}> {
    let values =[
      {coeff:1,val:1}
    ];
    return {values};
  }
}
