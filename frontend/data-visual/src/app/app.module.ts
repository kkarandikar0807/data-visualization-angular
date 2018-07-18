import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DashboardModule} from "./dashboard/dashboard.module";
import {routes} from "./app.routes";
import {DataVisualService} from "./services/data-visual.service";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    HttpClientModule,
    routes
  ],
  providers: [
    DataVisualService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
