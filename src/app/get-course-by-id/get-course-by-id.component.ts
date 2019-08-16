import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from '../course.class';

@Component({
  selector: 'app-get-course-by-id',
  templateUrl: './get-course-by-id.component.html',
  styleUrls: ['./get-course-by-id.component.scss']
})
export class GetCourseByIdComponent implements OnInit {

 public  courses: Course[] = [{ courseId: 0, courseName: '', courseDesc: '', coursecharges: 0 }];
  id: number;

  constructor(private courseService: CourseService) { }

  ngOnInit() {

  }
  onSubmit() {
    this.courseService.getCourseById(this.id).subscribe(data => {

      this.courses= data
    },
      error => {
        alert('No course found');
      });

  }
}

