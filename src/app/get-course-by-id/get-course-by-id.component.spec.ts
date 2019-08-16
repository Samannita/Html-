import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCourseByIdComponent } from './get-course-by-id.component';

describe('GetCourseByIdComponent', () => {
  let component: GetCourseByIdComponent;
  let fixture: ComponentFixture<GetCourseByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCourseByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCourseByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
