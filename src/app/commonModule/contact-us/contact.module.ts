import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactUsComponent} from "./component/contact-us.component";
import {ContactUsRoutingModule} from "./contact-routing.module";




@NgModule({
  imports: [
    CommonModule,
    ContactUsRoutingModule,
   
  ],
  declarations: [ContactUsComponent]
})
export class ContactUsModule { }