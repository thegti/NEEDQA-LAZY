import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VendorprofileComponent} from "./vendorprofile/vendorprofile.component";
import {VendorprofileRoutingModule} from "./vendorprofile-routing.module";
import { AppMaterialModule } from '../app-material.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';
import {LoaderComponent} from '../components/shared/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  imports: [
    CommonModule,
    VendorprofileRoutingModule,
    AppMaterialModule,
    FuseProgressBarModule,
    FuseSharedModule,
    FuseSidebarModule,
    FuseThemeOptionsModule,
    MatProgressSpinnerModule
    
   
  ],
  declarations: [VendorprofileComponent,LoaderComponent]
})
export class VendorProfileModule { }