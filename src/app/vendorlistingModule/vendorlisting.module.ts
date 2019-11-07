import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VendorlistingComponent} from "./vendorlisting/vendorlisting.component";
import {VendorListingRoutingModule} from "./vendorlisting-routing.module";
import { AppMaterialModule } from '../app-material.module';

@NgModule({
  imports: [
    CommonModule,
    VendorListingRoutingModule,
    AppMaterialModule
  ],
  declarations: [VendorlistingComponent]
})
export class VendorListingModule { }