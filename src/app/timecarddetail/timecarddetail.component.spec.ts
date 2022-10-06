import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimecarddetailComponent } from './timecarddetail.component';

describe('TimecarddetailComponent', () => {
  let component: TimecarddetailComponent;
  let fixture: ComponentFixture<TimecarddetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimecarddetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimecarddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
