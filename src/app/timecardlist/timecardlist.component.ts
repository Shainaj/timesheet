import { Component, OnInit } from '@angular/core';
import { TimeCardService } from '../sevices/timecard.service';
import { Route, Router } from '@angular/router';
import { TimecardList } from '../model/TimecardList';
import { Observable, Subject, concat, of } from 'rxjs';

@Component({
  selector: 'app-timecardlist',
  templateUrl: './timecardlist.component.html',
  styleUrls: ['./timecardlist.component.css']
})
export class TimecardlistComponent implements OnInit {

  timecardRequests : TimecardList[];
  
  constructor(private timecardService: TimeCardService,  private router: Router) { }

  ngOnInit() {
    
  }



}
