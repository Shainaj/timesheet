import { Component, OnInit } from '@angular/core';
import { LeaveList } from '../model/LeaveList';
import { LeaveService } from '../sevices/leave.service';
import { debounceTime, distinctUntilChanged, tap, switchMap, catchError } from 'rxjs/operators';
import { Observable, Subject, concat, of } from 'rxjs';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-leavelist',
  templateUrl: './leavelist.component.html',
  styleUrls: ['./leavelist.component.css']
})
export class LeavelistComponent implements OnInit {

  leaveRequests : LeaveList[];
  
  constructor(private leaveService: LeaveService,  private router: Router) { }

  ngOnInit() {
    this.getAllLeaveRequests();
  }


  getAllLeaveRequests() {

    this.leaveService.fetchAllLeaveRequests()
      .subscribe(item =>
         {
          this.leaveRequests = item;
          console.log('Leave requests data: ', this.leaveRequests);
        }
        
        );
      }


      addView(id : number){
        this.router.navigate(['leavedetails/'+id]);

      }




}
