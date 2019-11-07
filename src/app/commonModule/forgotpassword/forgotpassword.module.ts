import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ForgotpasswordComponent} from "../forgotpassword/component/forgotpassword.component";
import {ForgotpasswordRoutingModule} from "./forgotpassword-routing.module";
import { AppMaterialModule } from '../../app-material.module';

@NgModule({
  imports: [
    CommonModule,
    ForgotpasswordRoutingModule,
    AppMaterialModule
  ],
  declarations: [ForgotpasswordComponent]
})
export class ForgotpasswordModule { }