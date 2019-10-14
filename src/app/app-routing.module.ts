import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BikerprofileComponent }from './bikerprofile/bikerprofile.component';
import { OnboardingComponent }from './onboarding/onboarding.component';
import { TrainingLectureAttendeesComponent }from './training-lecture-attendees/training-lecture-attendees.component';


const routes: Routes = [
  {
    path:"",component:BikerprofileComponent

  },
  {
    path:"stausMaker",component:BikerprofileComponent

  },
  {
    path:"onboarding",component:OnboardingComponent
  },
   {
   path:"trainingLectureAttendees",component:TrainingLectureAttendeesComponent

   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
