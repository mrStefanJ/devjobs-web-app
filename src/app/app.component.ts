import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'devjobs-web-app';

  private isDark = false;

  @HostBinding('class')
  get themMode() {
    return this.isDark ? 'theme-dark' : 'theme-light';
  }

  switchMode(isDarkMode: boolean){
    this.isDark = isDarkMode;
  }
}
