import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReportComponent} from "./report/report.component";
import {ReportRoutingModule} from "./report-routing.module";
import { AppMaterialModule } from '../app-material.module';
import { WebDataRocksPivot } from "./WebDataRocks/webdatarocks.angular4";


@NgModule({
  imports: [
    CommonModule,
    ReportRoutingModule,
    AppMaterialModule,

   
  ],
  declarations: [ReportComponent, WebDataRocksPivot]
})
export class ReportModule { }