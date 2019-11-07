import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SupplierRegistrationComponent} from "./supplier-registration/supplier-registration.component";
import {SupplierRoutingModule} from "./supplier-routing.module";
import { AppMaterialModule } from '../app-material.module';
import {LoadersupplierComponent} from '../components/shared/loadersupplier/loadersupplier.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SupplierRoutingModule,
    AppMaterialModule,
    MatProgressSpinnerModule,
    FuseSharedModule,
    TranslateModule.forRoot(),
  

    
  ],
  declarations: [SupplierRegistrationComponent,  LoadersupplierComponent,]
})
export class SupplierModule { }