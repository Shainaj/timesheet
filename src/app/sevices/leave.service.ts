
import { Injectable } from '@angular/core';
import { Buffer } from 'buffer';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { LeaveList } from '../model/LeaveList';


@Injectable({
  providedIn: 'root'
})
export class LeaveService {
    
    errorHandler(error: any) {
        console.log('Employee api error ', error);
        return throwError(() => {
            return error;
        });
      }

    response : any;
    leaveList : LeaveList

    constructor(private http: HttpClient) { }
    apiurllist = 'http://localhost:8081/leave/allLeaveDetails';
    apiurlid = 'http://localhost:8081/leave/leaveDetails/';


  fetchAllLeaveRequests(): Observable<LeaveList[]> {
    return this.http.get<LeaveList[]>(
        this.apiurllist)
      .pipe(catchError(this.errorHandler));
  }

  fetchAllLeaveRequestById(id : number): Observable<any> {
    return this.http.get<any>(
        this.apiurllist+id)
      .pipe(catchError(this.errorHandler));
  }




}