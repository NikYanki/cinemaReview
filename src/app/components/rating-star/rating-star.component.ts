import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rating-star',
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.css']
})
export class RatingStarComponent implements OnInit {
  @Input() rating = 0;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.rating);
  }

}
