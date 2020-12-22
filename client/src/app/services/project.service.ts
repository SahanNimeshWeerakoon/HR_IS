import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private http: HttpClient
  ) { }

  find(id){
    return this.http.get(`http://localhost:5000/project`);
  }
  findproject(id): Observable<any> {
    return this.http.get(`http://localhost:5000/project/find/${id}`);
   }
  addProject(data): Observable<any> {
    return this.http.post('http://localhost:5000/project/addProject', data)
      .pipe(map(res => {
        return res;
      }));
  }
<<<<<<< HEAD
 updatepro(id, data): Observable<any> {
  return this.http.put(`http://localhost:5000/project/${id}`, data);
 }
=======

  ongoingProjects(): Observable<any> {
    return this.http.get('http://localhost:5000/project/ongoing');
  }

  finishedProjects(): Observable<any> {
    return this.http.get('http://localhost:5000/project/finished');
  }

  unfinishedProjects(): Observable<any> {
    return this.http.get('http://localhost:5000/project/unfinished');
  }
>>>>>>> e8789bb4821cade45260b17a98f5f671d9b58bb6
}
