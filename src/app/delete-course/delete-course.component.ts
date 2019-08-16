import { Component, OnInit } from '@angular/core';

import { CourseService } from '../course.service';


@Component({
  selector: 'app-delete-course',
  templateUrl: './delete-course.component.html',
  styleUrls: ['./delete-course.component.scss']
})
export class DeleteCourseComponent implements OnInit {
  courseDelete = { courseId: 0, courseName: '', courseDesc: '', coursecharges: 0 };
  public id: number;

  constructor(private courseService: CourseService) { }

  ngOnInit() {

  }
  onSubmit() {
    this.courseService.deleteCourse(this.id).subscribe(
      data => {

        this.courseDelete = data
      },
      error => {

        alert('fail to delete');
      }
    );
  }

}


