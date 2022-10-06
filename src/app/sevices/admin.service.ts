import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Buffer } from 'buffer'
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ApprovalData } from '../model/ApprovalData';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

    response : any;

    errorHandler(error: any) {
      console.log('Time card api error ', error);
      return throwError(() => {
          return error;
      });
    }

    constructor(private http: HttpClient) { }
    apiurllogin = 'http://localhost:8081/admin/login';
    apiurlapprove = 'http://localhost:8081/admin/approve';


  ProceedLogin(inputdata: any) {
     return this.http.post(this.apiurllogin, inputdata);
  }

  approveRequest(inputdata: ApprovalData) {
    return this.http.post(this.apiurlapprove, inputdata);
 }



}