import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PrivacyPolicyComponent} from "./component/privacy-policy.component";
import {PrivacyRoutingModule} from "./privacy-routing.module";




@NgModule({
  imports: [
    CommonModule,
    PrivacyRoutingModule,
   
  ],
  declarations: [PrivacyPolicyComponent]
})
export class PrivacyModule { }