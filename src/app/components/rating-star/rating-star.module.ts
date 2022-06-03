import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RatingStarComponent} from "./rating-star.component";



@NgModule({
  declarations: [RatingStarComponent],
  exports: [
    RatingStarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RatingStarModule { }
