import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TermsComponent} from "./component/terms.component";
import {TermsRoutingModule} from "./terms-routing.module";




@NgModule({
  imports: [
    CommonModule,
    TermsRoutingModule,
   
  ],
  declarations: [TermsComponent]
})
export class TermsModule { }