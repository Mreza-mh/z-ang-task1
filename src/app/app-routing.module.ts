import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './task2/landing-page/landing-page.component';
import { SinglePageComponent } from './task2/single-page/single-page.component';

const routes: Routes = [
  { path: 'landingpage', component: LandingPageComponent },
  { path: 'singlepage', component: SinglePageComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
