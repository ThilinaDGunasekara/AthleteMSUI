import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NbAlertModule, NbButtonModule, NbCardModule, NbDatepickerModule, NbInputModule, NbLayoutModule, NbRouteTabsetModule, NbSelectModule, NbTabsetModule, NbThemeModule, NbToastrModule, NbToastrService, NbUserModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule as ngFormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbRouteTabsetModule,
    NbTabsetModule,
    NbCardModule,
    NbEvaIconsModule,
    RouterTestingModule,
    NbInputModule,
    NbSelectModule,
    ngFormsModule,
    ReactiveFormsModule,
    NgbModule,
    NbDatepickerModule.forRoot(),
    NbAlertModule,
    NbToastrModule.forRoot(),
    NbUserModule,
    NbButtonModule,
    BrowserAnimationsModule,
    
  ],
  providers: [NgbActiveModal, ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
