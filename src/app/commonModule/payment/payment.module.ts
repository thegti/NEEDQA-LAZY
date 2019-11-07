import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaymentComponent} from "./component/payment.component";
import {PaymentRoutingModule} from "./payment-routing.module";
import {AppMaterialModule } from '../../app-material.module';



@NgModule({
  imports: [
    CommonModule,
    PaymentRoutingModule,
    AppMaterialModule
   
  ],
  declarations: [PaymentComponent]
})
export class PaymentModule { }