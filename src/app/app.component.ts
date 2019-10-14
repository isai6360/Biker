import {Component, OnInit,ViewChildren,ChangeDetectorRef} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbTabset } from "@ng-bootstrap/ng-bootstrap";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'biker';
    bikerName="Test Biker";
    bikerMobileNo="+6349418394";
    time;
    selectedFile:any
    isLinear = false;
    onboarding: FormGroup;
    vehicleAssessment: FormGroup;
    skillAssessment: FormGroup;
    trainingLecture: FormGroup;
    docs: FormGroup;
    mobileapp: FormGroup;
    initialTopups: FormGroup;
    gCash:FormGroup;
    bikerPhoto:FormGroup;
    statusMaker:FormGroup;
    assignBikerIDNo:FormGroup;
    initialGearReleasing:FormGroup;
    ScheduledTime="10:00 AM"
    ScheduledDate="13/11/2019"
    status="Pending"
    tabSelected:any
    copiedMobileNo:any
    editedMobile:any
    pageName:any
    private t: NgbTabset;
    constructor(private router: Router ){}
   
 
    ngOnInit() {
      this.pageName="TrainingLectureAttendees"
    }
    
    goToTLAteendees(){
      if(this.pageName=="TrainingLectureAttendees"){

    
      this.router.navigateByUrl("/trainingLectureAttendees")
      this.pageName="StatusApprover"

    }
      else{
        this.pageName="TrainingLectureAttendees"
        this.router.navigateByUrl("/stausMaker")
      }
    }
  }
