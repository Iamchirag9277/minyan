import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { AllMemberComponent } from './all-member/all-member.component';
import { JoinRequestComponent } from './join-request/join-request.component';
import { ActiveMemberComponent } from './active-member/active-member.component';
import { DeactiveMemberComponent } from './deactive-member/deactive-member.component';
import { SmsTextComponent } from './sms-text/sms-text.component';
import { LoginComponent } from './login/login.component';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoadingModule } from 'ngx-loading';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { LogoutComponent } from './logout/logout.component';
import { MeetingOneComponent } from './meeting-one/meeting-one.component';
import { MeetingTwoComponent } from './meeting-two/meeting-two.component';
import { MeetingThirdComponent } from './meeting-third/meeting-third.component';

import { MeetingOneDetailsComponent } from './meeting-one-details/meeting-one-details.component';
import { MeetingTwoDetailsComponent } from './meeting-two-details/meeting-two-details.component';
import { MeetingThirdDetailsComponent } from './meeting-third-details/meeting-third-details.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    AddMemberComponent,
    AllMemberComponent,
    JoinRequestComponent,
    ActiveMemberComponent,
    DeactiveMemberComponent,
    SmsTextComponent,
    LoginComponent,
    EditMemberComponent,
    LogoutComponent,
    MeetingOneComponent,
    MeetingTwoComponent,
    MeetingThirdComponent,
    MeetingOneDetailsComponent,
    MeetingTwoDetailsComponent,
    MeetingThirdDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    LoadingModule
  ],
  providers: [ {provide: LocationStrategy, useClass: HashLocationStrategy} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
