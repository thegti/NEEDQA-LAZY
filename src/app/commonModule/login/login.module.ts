import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./component/login.component";
import {LoginRoutingModule} from "./login-routing.module";
import { AppMaterialModule } from '../../app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';


@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
    FuseSharedModule,
    TranslateModule.forRoot(),
   
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }