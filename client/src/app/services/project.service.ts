import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private http: HttpClient
  ) { }

  addProject(data): Observable<any> {
    return this.http.post('http://localhost:5000/project/addProject', data)
      .pipe(map(res => {
        return res;
      }));
  }
}
