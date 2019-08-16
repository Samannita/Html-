import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewCourseComponent} from './view-course/view-course.component';
import { GetCourseByIdComponent } from './get-course-by-id/get-course-by-id.component';
import {UpdateCourseComponent } from './update-course/update-course.component'; 
import {DeleteCourseComponent} from './delete-course/delete-course.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateCourseComponent,
    ViewCourseComponent,
    GetCourseByIdComponent,
    UpdateCourseComponent,
    DeleteCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
