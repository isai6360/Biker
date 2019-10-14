import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BikerprofileComponent } from './bikerprofile/bikerprofile.component';
import { TrainingLectureAttendeesComponent } from './training-lecture-attendees/training-lecture-attendees.component';
import { NgbdSortableHeader } from './sortable.directive';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path:"onboarding",component:OnboardingComponent
  },
  {
    path:"trainingLectureAttendees",component:TrainingLectureAttendeesComponent

  }
];

@NgModule({
  declarations: [
    AppComponent,
    BikerprofileComponent,
    TrainingLectureAttendeesComponent,
    NgbdSortableHeader,
    OnboardingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
