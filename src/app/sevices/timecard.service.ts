
import { Injectable } from '@angular/core';
import { Buffer } from 'buffer';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { LeaveList } from '../model/LeaveList';
import { TimecardList } from '../model/TimecardList';


@Injectable({
  providedIn: 'root'
})
export class TimeCardService {
    
    errorHandler(error: any) {
        console.log('Time card api error ', error);
        return throwError(() => {
            return error;
        });
      }

    response : any;
    leaveList : TimecardList

    constructor(private http: HttpClient) { }
    apiurllist = 'http://localhost:8081/timecard/allTimecardDetails';
    apiurlid = 'http://localhost:8081/timecard/details/112';


  fetchAllTimecardRequests(): Observable<TimecardList[]> {
    return this.http.get<TimecardList[]>(
        this.apiurllist)
      .pipe(catchError(this.errorHandler));
  }

  fetchAllTimecardRequestById(id : BigInt): Observable<any> {
    return this.http.get<any>(
        this.apiurllist+id)
      .pipe(catchError(this.errorHandler));
  }




}