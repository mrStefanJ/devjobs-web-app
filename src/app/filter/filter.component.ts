import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  @Input() isShow:boolean = false;
  //@Output() isShow: EventEmitter<boolean> = new EventEmitter();
  public searchTerm: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
   
  }
  search(event:any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.apiService.search.next(this.searchTerm);
  }

  toggleShow(){
    this.isShow = !this.isShow;
  }
  //@Output() jobPosition = new EventEmitter();

  // onChangeJob(value: string){
  //   if(value.length > 0){
  //     this.jobPosition.emit(value);
  //     console.log(this.jobPosition.emit(value))
  //   }

  //   console.log(value)
  // }

}
