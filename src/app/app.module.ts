import { ServiceProviderModule } from './service-provider/service-provider.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { RequestsComponent } from './service-provider/requests/requests.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceProviderModule
  ],
  providers: [],
  bootstrap: [AppComponent,RequestsComponent]
})
export class AppModule { }
