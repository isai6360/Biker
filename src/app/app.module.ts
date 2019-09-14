import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatStepperModule, MatTabsModule,MatInputModule, MatButtonModule,MatCheckboxModule} from '@angular/material'
import {MatDatepickerModule} from '@angular/material/datepicker'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    MatButtonModule, 
    MatTabsModule,
    MatCheckboxModule,
    MatStepperModule, MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    MatButtonModule, MatTabsModule,
    MatCheckboxModule,MatStepperModule, MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
