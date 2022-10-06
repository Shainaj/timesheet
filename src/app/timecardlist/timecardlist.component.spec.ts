import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimecardlistComponent } from './timecardlist.component';

describe('TimecardlistComponent', () => {
  let component: TimecardlistComponent;
  let fixture: ComponentFixture<TimecardlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimecardlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimecardlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
