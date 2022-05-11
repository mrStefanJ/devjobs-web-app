import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output()
  readonly darkModeSwitched = new EventEmitter<boolean>();

  constructor(private router: Router) { }
  
  ngOnInit(): void {
  }

  gotoHomePage(){
    this.router.navigate(['dev-job']);
  }

  onDarkModeSwitched({checked}: MatSlideToggleChange){
    this.darkModeSwitched.emit(checked)
  }
}
