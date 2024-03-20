import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsComponent } from './requests/requests.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    RequestsComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[RequestsComponent,DetailsComponent]
})
export class ServiceProviderModule { }
