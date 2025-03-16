import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Task1Component } from './task1/task1.component';
import { LandingPageComponent } from './task2/landing-page/landing-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SinglePageComponent } from './task2/single-page/single-page.component';
import { SponserComponent } from './task2/single-page/sponser/sponser.component';
import { CalenderComponent } from './task2/single-page/calender/calender.component';
import { LandingHeaderComponent } from './task2/landing-page/landing-header/landing-header.component';
import { LandingSearchComponent } from './task2/landing-page/landing-search/landing-search.component';
import { MiniCardComponent } from './task2/landing-page/mini-card/mini-card.component';
import { LandingCourseCardComponent } from './task2/landing-page/landing-course-card/landing-course-card.component';
import { LandingEventCardComponent } from './task2/landing-page/landing-event-card/landing-event-card.component';
import { LandingAdsComponent } from './task2/landing-page/landing-ads/landing-ads.component';
import { LandingSponserCardComponent } from './task2/landing-page/landing-sponser-card/landing-sponser-card.component';
import { LandingCommentCardComponent } from './task2/landing-page/landing-comment-card/landing-comment-card.component';
import { AppRoutingModule } from './app-routing.module';
import { TitleDescribeComponent } from './task2/single-page/title-describe/title-describe.component';
import { TeacherCardComponent } from './task2/single-page/teacher-card/teacher-card.component';
import { PrecourseCardComponent } from './task2/single-page/precourse-card/precourse-card.component';
import { CourseScheduleComponent } from './task2/single-page/course-schedule/course-schedule.component';
import { FAQCardComponent } from './task2/single-page/faq-card/faq-card.component';
import { CostCardComponent } from './task2/single-page/cost-card/cost-card.component';

@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    LandingPageComponent,
    HeaderComponent,
    FooterComponent,
    SinglePageComponent,
    SponserComponent,
    CalenderComponent,
    LandingHeaderComponent,
    LandingSearchComponent,
    MiniCardComponent,
    LandingCourseCardComponent,
    LandingEventCardComponent,
    LandingAdsComponent,
    LandingSponserCardComponent,
    LandingCommentCardComponent,
    TitleDescribeComponent,
    TeacherCardComponent,
    PrecourseCardComponent,
    CourseScheduleComponent,
    FAQCardComponent,
    CostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
