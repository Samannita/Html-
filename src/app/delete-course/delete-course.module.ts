import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteCourseComponent } from './delete-course.component';
import { DeleteRoutingModule } from './delete-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DeleteCourseComponent],
  imports: [
    CommonModule,
    DeleteRoutingModule,
    FormsModule
  ]
})
export class DeleteCourseModule { }
