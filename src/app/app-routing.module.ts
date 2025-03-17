import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './task2/landing-page/landing-page.component';
import { SinglePageComponent } from './task2/single-page/single-page.component';
import { Task1Component } from './task1/task1.component';
import { FirstpageComponent } from './firstpage/firstpage.component';

const routes: Routes = [
  { path: '', component: FirstpageComponent },
  { path: 'landingpage', component: LandingPageComponent },
  { path: 'singlepage', component: SinglePageComponent },
  { path: 'children-parent', component: Task1Component },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
