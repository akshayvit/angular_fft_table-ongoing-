import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PolyService {


  constructor(private http: HttpClient) { }

  postcoeff(val1:Number,deg:Number) {
     this.http.post('/api/values',"{coeff:${val1},val:${deg}}");
  }
  getcoeff(coef:Number) {
    return this.http.get('/api/values/${coef}');
  }
}