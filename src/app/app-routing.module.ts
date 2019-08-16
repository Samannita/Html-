import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewCourseComponent } from './view-course/view-course.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { DeleteCourseComponent } from './delete-course/delete-course.component';
import { GetCourseByIdComponent } from './get-course-by-id/get-course-by-id.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', redirectTo: 'course', pathMatch: 'full' },
  { path: 'addCourse', component: CreateCourseComponent },
  { path: 'getAllCourse', component: ViewCourseComponent },
  { path: 'updateCourse', component: UpdateCourseComponent },
  { path: 'deleteCourse', component: DeleteCourseComponent },
  { path: 'retrieveById', component: GetCourseByIdComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
