import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceCardComponent } from './space-card.component';



@NgModule({
  declarations: [SpaceCardComponent],
  imports: [
    CommonModule
  ],
  exports: [SpaceCardComponent]
})
export class SpaceCardModule { }
