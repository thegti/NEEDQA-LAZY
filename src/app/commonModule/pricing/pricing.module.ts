import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PricingComponent} from "./component/pricing.component";
import {PricingRoutingModule} from "./pricing-routing.module";
import {AppMaterialModule } from '../../app-material.module';



@NgModule({
  imports: [
    CommonModule,
    PricingRoutingModule,
    AppMaterialModule
   
  ],
  declarations: [PricingComponent]
})
export class PricingModule { }