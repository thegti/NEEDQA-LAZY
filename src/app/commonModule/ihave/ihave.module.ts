import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IhaveComponent} from "./component/ihave.component";
import {IhaveRoutingModule} from "./ihave-routing.module";
import { AppMaterialModule } from '../../app-material.module';



@NgModule({
  imports: [
    CommonModule,
    IhaveRoutingModule,
    AppMaterialModule
   
  ],
  declarations: [IhaveComponent]
})
export class IhaveModule { }