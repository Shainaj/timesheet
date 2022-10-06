import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../sevices/leave.service';
import { debounceTime, distinctUntilChanged, tap, switchMap, catchError } from 'rxjs/operators';
import { Observable, Subject, concat, of } from 'rxjs';
import { LeaveData } from '../model/LeaveData';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../sevices/admin.service';
import { ApprovalData } from '../model/ApprovalData';
import { User } from '../model/User';

@Component({
  selector: 'app-leavedetail',
  templateUrl: './leavedetail.component.html',
  styleUrls: ['./leavedetail.component.css']
})
export class LeavedetailComponent implements OnInit {

  private id: number;
  private sub: any;
  errorMsg: String;
  isRequestEdit = false;

  isLeaveRequestSelected = false;
  selectedLeaveRequest: LeaveData;
  status : String;
  comments: String;
  selected_leave_msg: String;
  requestApproveForm: FormGroup;
  has_error = false;
  approve_leave_update_msg: String;
  submitted = false;
  requestApprovalDetails: ApprovalData;
  data : any;
  loggedInUser : any

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, 
    private leaveService: LeaveService, private adminService: AdminService) { }

  ngOnInit() {
    this.routeId();
  
  }

  routeId() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.getEmployeeLeaveById(this.id);
    });
  }

  initRequestApproveForm() {
    this.loggedInUser=localStorage.getItem('userId');
    this.requestApproveForm = this.formBuilder.group({
      leaveId: [this.selectedLeaveRequest.leaveId],
      userId: [this.loggedInUser],
      status: [this.status],
      comments: [this.comments]
    });
  }

  toggleEdit() {
    this.initRequestApproveForm();
  }

  get f() { return this.requestApproveForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.requestApproveForm.invalid) {
      return;
    }
    console.log('success ', this.requestApproveForm.value);
    // this.requestApproveForm.patchValue({
    //   leaveId
    // });
    this.adminService.approveRequest(this.requestApproveForm.value).subscribe(item => {
      this.has_error = false;
      this.approve_leave_update_msg = 'Successfully Submitted';
      this.data = item;
      this.requestApprovalDetails = this.data;
      this.requestApproveForm.reset();
      this.submitted = false;
    });

  }

  getEmployeeLeaveById(id: number) {
    if (id > 0) {
      this.leaveService.fetchAllLeaveRequestById(id)
        .subscribe(
          item => {
            this.data = item;
            if(this.data["leaveDetailsProjection"]!=null){
           
            this.selectedLeaveRequest = this.data["leaveDetailsProjection"];
            this.isLeaveRequestSelected = true;
            // console.log('selectedEmployee data: ', data);
          }else{
            alert("Invalid leave data")

          }
        }, );
    } else {
      this.isLeaveRequestSelected = false;
    }
  }


  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
