import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Course } from './course.class';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
 
  static base_url: string = 'http://ec2-3-223-169-238.compute-1.amazonaws.com:8080';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });


  constructor(private http: HttpClient) { }

  public createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(CourseService.base_url + "/addCourse", course, { headers: this.headers });
  }

  public getCourse(): Observable<any> {
    return this.http.get<any>(CourseService.base_url + "/getAllCourse ", { headers: this.headers })

  }
  public deleteCourse(id: number): Observable<any> {

    // let httpParams = new HttpParams().set("id",id+"");
    // let options = { params: httpParams };

    //return this.http.delete("http://10.236.246.20:8080/deleteCourse",options);
    return this.http.delete("http://ec2-3-223-169-238.compute-1.amazonaws.com:8080/deleteCourse/" + id);

  }
  public updateCourse(courses: Course): Observable<any> {
    return this.http.put<any>(CourseService.base_url + "/updateCpurse", courses, { headers: this.headers });
  }
  public getCourseById(id: number): Observable<any> {
    return this.http.get(CourseService.base_url + "" + "/" + "view" + "/" + id, { headers: this.headers });
  }


}