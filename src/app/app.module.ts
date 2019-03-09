import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';

import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import * as firebase from 'firebase';
import { ShowdetailComponent } from './showdetail/showdetail.component';
import { FeedbackComponent } from './feedback/feedback.component';


// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDguoLmpIAsxuIcF_Jci49ISFoOD6-6k8Y",
    authDomain: "woodscafe-8f6c0.firebaseapp.com",
    databaseURL: "https://woodscafe-8f6c0.firebaseio.com",
    projectId: "woodscafe-8f6c0",
    storageBucket: "",
    messagingSenderId: "1043007303794"
  };
  firebase.initializeApp(config);

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    Dashboard,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
   
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
