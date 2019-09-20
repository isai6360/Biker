import {Component, OnInit,ViewChildren,ChangeDetectorRef} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbTabset } from "@ng-bootstrap/ng-bootstrap";


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
    assignBikerID:FormGroup;
    initialGearReleasing:FormGroup;
    ScheduledTime="10:00 AM"
    ScheduledDate="13/11/2019"
    status="Pending"
    tabSelected:any
    @ViewChildren(NgbTabset)
    private t: NgbTabset;
    constructor(private _formBuilder: FormBuilder,private ref: ChangeDetectorRef) {
    }
   
 
    ngOnInit() {
      this.time = {hour: 13, minute: 30};
// to select tab programmatically
     // this.tabSelected="step1"

      this.onboarding = this._formBuilder.group({
        trainingTime:['', Validators.required],
        model:['',],
        time:[{hour: 13, minute: 30}],
        bikerConfirmation:['', Validators.required],
        ScheduledDate:['', Validators.required],
        ScheduledDatetime:['', Validators.required],
        bikerArrival:['', Validators.required],
        remarks:['', [Validators.required, Validators.maxLength(250)]]
      
      });
      this.vehicleAssessment = this._formBuilder.group({
        vaStatus: ['', Validators.required],
        vadate: ['', Validators.required],
        vaRemarks: ['', Validators.required],
        bikeImg: ['', Validators.required],
      });
      this.skillAssessment = this._formBuilder.group({
        saStatus: ['', Validators.required],
        saDate: ['', Validators.required],
        saRemarks: ['', Validators.required],
      });
      this.trainingLecture = this._formBuilder.group({
        trainingLectureBatchNo: ['', Validators.required],
        trainingLectureDate: ['', Validators.required],
        trainingLectureRemarks: ['', Validators.required],
      });
      this.bikerPhoto = this._formBuilder.group({
        bikerImg: ['', Validators.required],
        bikerPhotoRemarks: ['', Validators.required],
      });
      this.gCash = this._formBuilder.group({
        paymentGCASH: ['', Validators.required],
        gCAShNumber: ['', Validators.required],
        gCashRemarks: ['', Validators.required],
      });
      this.initialTopups=this._formBuilder.group({
        initialTopupRemarks: ['', Validators.required],
        otherAmt: ['', Validators.required],
        initialTopupAmt: ['', Validators.required],
      });
      this.mobileapp=this._formBuilder.group({
        mobileValidation: ['', Validators.required],
        imeiValidation: ['', Validators.required],
        isBikerHasMobileApp: ['', Validators.required],
        mobileappRemarks: ['', Validators.required],
      });
      this.docs=this._formBuilder.group({
        docsRemarks: ['', Validators.required],
        nbiValidation: ['', Validators.required],
        policyValidation: ['', Validators.required],
        driverLicenseValidation: ['', Validators.required],
        orValidation: ['', Validators.required],
        supportingDocumentValidation: ['', Validators.required],
      });
      this.statusMaker = this._formBuilder.group({
        requestedStatus:['', Validators.required],
        statusMakerRemarks:['', Validators.required]
      })
      this.assignBikerID = this._formBuilder.group({
        assignedBikerID:['', Validators.required],
       
      })
      
      this.initialGearReleasing = this._formBuilder.group({
        inputId:['1', Validators.required],
        inputHelmet:['1', Validators.required],
        inputDrift:['1', Validators.required],
        inputBikerVest:['1', Validators.required],
        inputShowerCap:['1', Validators.required],
        inputFaceMask:['1', Validators.required],
        initialGearRemarks:['', Validators.required]
      
  
      })
    }
    
    isFieldValid(field: string) {
      return !this.onboarding.get(field).valid && this.onboarding.get(field).touched;
    }

    onFileSelected(e){
      // add condition for bike and biker 
      this.selectedFile=e.target.files[0].name;
    }
  }
