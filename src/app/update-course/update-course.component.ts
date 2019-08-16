import { Component, OnInit } from '@angular/core';
import { Course } from '../course.class';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.scss']
})
export class UpdateCourseComponent implements OnInit {
  public courses: Course[];
  public constructor(private course: CourseService) { }

  ngOnInit() {
    this.course.getCourse().subscribe(data => this.courses = data);
   
  }
  onModify(data){
    this.course.updateCourse(data).subscribe( value => {
      console.log('[POST] update Course Successfully', value);
    }, error => {
      alert('Fail to update Course!!!');
    },
    () => {
      alert('POST Course - now completed.');
    }
  );
  }

}
