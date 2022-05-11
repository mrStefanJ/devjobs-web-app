import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'dev-job', pathMatch: 'full'},
  {path: 'dev-job', component: JobsListComponent},
  {path: 'job/detail/:id', component: JobDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
