import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { SpaceCardModule } from './space-card/space-card.module';
import { FilterModule } from './filter/filter.module';
import { HomeServiceService } from './service/home-service.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SpaceCardModule,
    FilterModule,
    RouterModule.forChild(routes),
  ],
  providers: [HomeServiceService]
})
export class HomeModule { }
