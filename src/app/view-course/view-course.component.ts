import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.scss']
})
export class ViewCourseComponent implements OnInit {
  public courses = [];
  constructor(private course: CourseService) { }

  ngOnInit() {
    this.course.getCourse().subscribe(data => this.courses = data);
  
  }

}
