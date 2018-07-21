import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { AllMemberComponent } from './all-member/all-member.component';
import { JoinRequestComponent } from './join-request/join-request.component';
import { ActiveMemberComponent } from './active-member/active-member.component';
import { DeactiveMemberComponent } from './deactive-member/deactive-member.component';
import { SmsTextComponent } from './sms-text/sms-text.component';
import { LoginComponent } from './login/login.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthguardService } from './authguard.service';

import { MeetingOneComponent } from './meeting-one/meeting-one.component';
import { MeetingTwoComponent } from './meeting-two/meeting-two.component';
import { MeetingThirdComponent } from './meeting-third/meeting-third.component';


import { MeetingOneDetailsComponent } from './meeting-one-details/meeting-one-details.component';
import { MeetingTwoDetailsComponent } from './meeting-two-details/meeting-two-details.component';
import { MeetingThirdDetailsComponent } from './meeting-third-details/meeting-third-details.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent , canActivate: [AuthguardService] },
  { path: 'add-member', component: AddMemberComponent , canActivate: [AuthguardService] },
  // { path: 'all-member', component: AllMemberComponent },
  { path: 'active-member', component: ActiveMemberComponent , canActivate: [AuthguardService] },
  { path: 'deactive-member', component: DeactiveMemberComponent , canActivate: [AuthguardService] },
  { path: 'join-request', component: JoinRequestComponent , canActivate: [AuthguardService]},
  { path: 'sms-text', component: SmsTextComponent , canActivate: [AuthguardService]},
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full'  },
  { path: 'edit-member/:id', component: EditMemberComponent , canActivate: [AuthguardService] },
  { path: 'logout', component: LogoutComponent },

  { path: 'meeting-one', component: MeetingOneComponent , canActivate: [AuthguardService]  },
  { path: 'meeting-two', component: MeetingTwoComponent , canActivate: [AuthguardService] },
  { path: 'meeting-third', component: MeetingThirdComponent , canActivate: [AuthguardService] },

  { path: 'meeting-one-details', component: MeetingOneDetailsComponent , canActivate: [AuthguardService] },
  { path: 'meeting-two-details', component: MeetingTwoDetailsComponent , canActivate: [AuthguardService] },
  { path: 'meeting-third-details', component: MeetingThirdDetailsComponent , canActivate: [AuthguardService] },

  
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
