import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-training-lecture-attendees',
  templateUrl: './training-lecture-attendees.component.html',
  styleUrls: ['./training-lecture-attendees.component.css']
})
export class TrainingLectureAttendeesComponent implements OnInit {
bikers:any
isTrainingLectureAttendees_Selected:any=[]
trainingLectureAttendees:FormGroup
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.bikers = [
      {
        Id: "12345",
        Name: 'BikerName',
        Mobile: '1490239',
        TrainingStatus: "Pass",
        Attendees: "Present"
      
      },
      {
        Id: "2345",
        Name: 'BikerName',
        Mobile: '1490239',
        TrainingStatus: "Fail",
        Attendees: "Present"
      }
    ];
    this.isTrainingLectureAttendees_Selected=[];
    this.trainingLectureAttendees = this._formBuilder.group({
      date:[''],
      selectAllAttendees:[''],
      selectAllTrainingStatus:['']


    })
this.bikers.forEach(b =>  this.trainingLectureAttendees.addControl(b.Attendees,this._formBuilder.control('')));
this.bikers.forEach(b =>  this.trainingLectureAttendees.addControl(b.TrainingStatus,this._formBuilder.control('')));
  
}
  oncheck(e,b,type){
    if(e.target.checked){
      let x=this.isTrainingLectureAttendees_Selected.filter((v,n) => {
        if (v.Id == b.Id) {
          return true
        }
        return false
    })
    if(x.length==0)
    this.isTrainingLectureAttendees_Selected.push(b)

    }
    else{
      this.isTrainingLectureAttendees_Selected=this.isTrainingLectureAttendees_Selected.filter((v,n) => {
      if (v.Id != b.Id )
      {
        return true;
      }
     
      // Add condition check for sibling chk box

      
      return false;
    })
  }
  }

}
