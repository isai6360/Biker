import {Component, PipeTransform ,OnInit,Directive, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import {FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdSortableHeader , SortEvent} from '../sortable.directive';
import { DecimalPipe } from '@angular/common';

import { Observable ,Subject,BehaviorSubject,of} from 'rxjs';
import { map, startWith ,switchMap,withLatestFrom,} from 'rxjs/operators';

interface Biker {
  Date: string;
  Name: string;
  Phone: string;
  currentStatus: string;
  requestedStatusByApprover:string;
  initialGear:  string;
}

const BIKERS: Biker[] = [
  {
    Date: "21/07/2019",
    Name: 'America',
    Phone: '1490239',
    currentStatus: "Pending",
    requestedStatusByApprover: "Activated",
    initialGear: "Complete"
  },
  {
    Date: "22/07/2019",
    Name: 'Canada',
    Phone: '3490239',
    currentStatus: "Pending",
    requestedStatusByApprover: "Activated",
    initialGear: "Complete"
  }
];
function compare(v1, v2) {
  return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}
function search(text: string, pipe: PipeTransform): Biker[] {
  return BIKERS.filter(b => {
    const term = text.toLowerCase();
    return b.Name.toLowerCase().includes(term);
  });
}



@Component({
  selector: 'app-bikerprofile',
  templateUrl: './bikerprofile.component.html',
  styleUrls: ['./bikerprofile.component.css'],
  providers: [DecimalPipe]
})
export class BikerprofileComponent implements OnInit {
  initialGearReleasing:FormGroup
  statusMaker:FormGroup
  statusApproverForm:FormGroup
  bikers = BIKERS;
  selectedRow:any=[]
  filter = new FormControl('');
  private _search$ = new Subject<void>()
  bikers$ : Observable<Biker[]>;
    
  
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(private _formBuilder: FormBuilder,pipe: DecimalPipe,private modalService: NgbModal) { 
    this.bikers$=this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text, pipe))
    ) 
    
  }

 
  ngOnInit() {
    this.statusMaker = this._formBuilder.group({
      requestedStatus:['', Validators.required],
      statusMakerRemarks:['', Validators.required]
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
    this.selectedRow=[];
    this.statusApproverForm = this._formBuilder.group({
      selectAllAttendees:[''],
      currentStatusApprover:[''],
      requestedStatusByMaker:['']
 })
this.bikers.forEach(b =>  this.statusApproverForm.addControl(b.Name,this._formBuilder.control('')));
this.bikers.forEach(b =>  this.statusApproverForm.addControl(b.Phone,this._formBuilder.control('')));
  
  }
  incrementdecrement(type,mode)
  { 
    let dec=0
    let param = "input"+type
    if(mode=="inc")
    dec=parseInt(this.initialGearReleasing.get(param).value)+1 
    else
    dec=this.initialGearReleasing.get(param).value > 1 ? parseInt(this.initialGearReleasing.get(param).value)-1 : this.initialGearReleasing.get(param).value

    if(param=="inputId")
      this.initialGearReleasing.patchValue({inputId : dec})
    else if(param=="inputHelmet")
    this.initialGearReleasing.patchValue({inputHelmet: dec})
    else if(param=="inputDrift")
    this.initialGearReleasing.patchValue({inputDrift: dec})
    else if(param=="inputBikerVest")
    this.initialGearReleasing.patchValue({inputBikerVest: dec})
    else if(param=="inputShowerCap")
    this.initialGearReleasing.patchValue({inputShowerCap: dec})
    else if(param=="inputFaceMask")
    this.initialGearReleasing.patchValue({inputFaceMask: dec})

  }
  
  onSort({column, direction}: SortEvent) {

    // sorting 
      this.bikers$=this.bikers$.pipe(map(data => data.sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
        })))
  }
  selectAll(e){
    
    this.selectedRow=[]
    if(e.target.checked)
    this.selectedRow=this.bikers
  }
  oncheck(e,b){
    if(e.target.checked)
    this.selectedRow.push(b)
    else {
    this.selectedRow=this.selectedRow.filter((v,n) => {
      if (v.Name != b.Name )
      {
        return true;
      }
      return false
    })
  }
}
reject(content){
this.modalService.open(content)
}
finalSubmit(){
  this.modalService.dismissAll()
  /*---final submit --*/
}
}
