import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cinemaReview';
  setTheme():void{
  const toggle = document.querySelector('.container')
    toggle.classList.toggle('dark')
  }
}
