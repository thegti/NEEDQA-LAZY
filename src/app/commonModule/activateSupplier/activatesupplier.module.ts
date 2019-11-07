import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivateSupplierComponent} from "../activateSupplier/component/activate-supplier.component";
import {ActivateSupplierRoutingModule} from "./activatesupplier-routing.module";
import { AppMaterialModule } from '../../app-material.module';

@NgModule({
  imports: [
    CommonModule,
    ActivateSupplierRoutingModule,
    AppMaterialModule
  ],
  declarations: [ActivateSupplierComponent]
})
export class ActivateSupplierModule { }