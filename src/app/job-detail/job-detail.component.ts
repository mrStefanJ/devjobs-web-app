import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {

  jobId!: string;
  jobData: any;
  jobRequirement: any;
  jobRole: any;

  constructor(private api: ApiService,
      private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params
      .subscribe(res => {
        this.jobId = res['id'];
      })
      this.getJobDetail();
  }

  getJobDetail(){
    this.api.getCurrentJobById(this.jobId)
      .subscribe(res => {
        console.dir(res);
        this.jobData = res;
        this.jobRequirement = res['requirements']['items'];
        this.jobRole = res['role']['items'];
      })
  }
}
