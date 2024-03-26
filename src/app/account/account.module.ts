import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AccountComponent } from './account/account.component';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {CdkStepperModule} from '@angular/cdk/stepper';
// import { StepperComponent } from './registration/stepper/stepper.component';
// import { RoleStepComponent } from './registration/stepper/role-step/role-step.component';
// import { PersonalInformationStepComponent } from './registration/stepper/personal-information-step/personal-information-step.component';
// import { ConfirmEmailStepComponent } from './registration/stepper/confirm-email-step/confirm-email-step.component';

import { MatStepperModule } from "@angular/material/stepper";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    RegistrationComponent,
    AccountComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    CoreModule ,
    RouterModule ,
    ReactiveFormsModule,
    CdkStepperModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [AccountComponent],
})
export class AccountModule {
}

