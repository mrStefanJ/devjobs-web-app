import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Job } from '../model/job.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public search = new BehaviorSubject<string>("");
  public location = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) { }

  getJobList(){
    return this.http.get<Job>(`http://localhost:3000/jobs`);
  }
  getCurrentJobById(jobId: string){
    return this.http.get<Job>(`http://localhost:3000/jobs/${jobId}`);
  }

  getJobsLocation(){
    return this.http.get<any>(`http://localhost:3000/jobs`);
  }
}
