import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  // transform(jobList: any, value: string) {
  //       jobList = jobList.filter((item: any) => {
  //         console.log(item);
  //         if(item.indexOf(value))
  //         return item
  //       });
  //   return jobList;
  // }

  transform(value: any, filterString: string, jobName: string): any {
    const result: any = [];
    if(!value || filterString === '' || jobName === '') {
      return value;
    }

    value.forEach((a:any) => {
      if(a[jobName].trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(a);
      }
    });
    return result;
  }

  // transform(jobList: any[], filterText: string) {
  //   return jobList ? jobList.filter(item => item.name.search(new RegExp(filterText, 'i')) > -1) : [];
  // }

  // transform(listJob: any, searchJob? :any): any {
  //   if(!listJob) {
  //     return null;
  //   }

  //   if(!searchJob) {
  //     return listJob;
  //   }

  //   searchJob = searchJob.toLowerCase();

  //   return listJob.filter((data: any) => {
  //     return JSON.stringify(data).toLowerCase().includes(searchJob);
  //   })
  // }

}
