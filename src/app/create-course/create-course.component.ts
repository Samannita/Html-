import { Component, OnInit } from '@angular/core';
import { Course } from '../course.class';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {

  public course: Course = { courseId: 0, courseName: '', courseDesc: '', coursecharges: 0 };
  title = 'TMS-COURSE';
  public constructor(private courseservice: CourseService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.courseservice.createCourse(this.course).subscribe(
      value => {
        console.log('[POST] create Course Successfully', value);
        alert("Course created successfully")
      }, error => {
        alert("invalid input format")
        console.log('Fail to create Course!!!');
      },
      () => {
        console.log('POST Course - now completed.');
      }
    );
  }

}
