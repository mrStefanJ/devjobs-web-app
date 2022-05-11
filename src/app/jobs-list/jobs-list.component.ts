import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit {

  searchKey: string = "";
  jobListData: any = [];
  jobPosition: any = [];

  getFullTimeJob: string = "";
  isFullTime:boolean = false;

  constructor(
    private api: ApiService,
    private router: Router) { }

  ngOnInit(): void {
      this.getAllJobList();

    this.api.search.subscribe((val:any) => {
      this.searchKey = val;
    })
  }

  getAllJobList(){
      this.api.getJobList()
      .subscribe((res) => {
        console.dir(res);
        this.jobListData = res;
        this.getFullTimeJob = res['contract'];
      })
  }

  toggleShow(){
    this.isFullTime = !this.isFullTime
  }

  gotoDetails(job: any){
    this.router.navigate(['job/detail', job.id]);
  }
}
