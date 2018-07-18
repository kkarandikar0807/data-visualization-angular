import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {DashboardComponent} from "./dashboard.component";
import {BarChartComponent, PieChartComponent} from "angular-d3-charts";




@NgModule({
  imports: [
    CommonModule,
    FormsModule

  ],
  declarations: [
    DashboardComponent,
    BarChartComponent,
    PieChartComponent
  ],
  exports: [
    DashboardComponent
  ]
})

export class DashboardModule {}
