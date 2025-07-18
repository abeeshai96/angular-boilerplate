import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  private url = 'https://jsonplaceholder.typicode.com/todos/1';

  getData(): Observable<any> {
    return this.http.get(this.url);
  }
}
