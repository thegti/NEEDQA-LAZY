import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutComponent} from "./component/about.component";
import {AboutRoutingModule} from "./about-routing.module";
import { AppMaterialModule } from '../../app-material.module';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    AppMaterialModule,
    TranslateModule.forRoot(),
   
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }