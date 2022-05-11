import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public search = new BehaviorSubject<string>("");

  constructor(private http: HttpClient) { }

  getJobList(){
    return this.http.get<any>(`http://localhost:3000/jobs`);
  }
  getCurrentJobById(jobId: string){
    return this.http.get<any>(`http://localhost:3000/jobs/${jobId}`);
  }
}
