import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DownloadsComponent} from "./component/downloads.component";
import {DownloadsRoutingModule} from "./download-routing.module";
import { AppMaterialModule } from '../../app-material.module';



@NgModule({
  imports: [
    CommonModule,
    DownloadsRoutingModule,
    AppMaterialModule
   
  ],
  declarations: [DownloadsComponent]
})
export class DownloadModule { }