import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'biker';
    bikerName="biker";
    bikerMobileNo="9949418394";
    time;
    isLinear = false;
    onboarding: FormGroup;
    vehicleAssessment: FormGroup;
    ScheduledTime="10:00 AM"
    ScheduledDate="13/11/2019"
    status="Pending"
    
    constructor(private _formBuilder: FormBuilder) {}
  
    ngOnInit() {
      this.time = {hour: 13, minute: 30};

      this.onboarding = this._formBuilder.group({
        trainingTime:['', Validators.required],
        model:['',],
        time:[{hour: 13, minute: 30}],
        bikerConfirmation:['', Validators.required],
        remarks:['', [Validators.required, Validators.maxLength(250)]]
      
      });
      this.vehicleAssessment = this._formBuilder.group({
        secondCtrl: ['', Validators.required]
      });
    }
    isFieldValid(field: string) {
      return !this.onboarding.get(field).valid && this.onboarding.get(field).touched;
    }
  }
