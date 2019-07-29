import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ViewUserProfileComponent } from './user-profile/viewuser-profile.component';
import { FormsModule } from '@angular/forms';
import { ModalContentComponent } from './user-profile/modal-content/modal-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewUserProfileComponent,
  ModalContentComponent
  ],
  entryComponents: [ModalContentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
