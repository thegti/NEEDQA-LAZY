import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FuseConfirmDialogModule } from '@fuse/components/confirm-dialog/confirm-dialog.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';
import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';
import { fuseConfig } from 'app/fuse-config';
import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { HomeComponent } from './home/home.component';
import {ProfiledefaultComponent} from './profiledefault/profiledefault.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { DialogComponent } from './dialog/dialog.component';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NextdialogComponent } from './popup/nextdialog/nextdialog.component';
import { VendorsavedialogComponent } from './popup/vendorsavedialog/vendorsavedialog.component';
import { VendorkeyworddeletedialogComponent } from './popup/vendorkeyworddeletedialog/vendorkeyworddeletedialog.component';
import { VendorEmailChangedialogComponent } from './popup/vendor-email-changedialog/vendor-email-changedialog.component';
import {SelectProducrServicedialogComponent} from './popup/select-producr-servicedialog/select-producr-servicedialog.component';
import {SelectPersonalBusinessdialogComponent} from './popup/select-personal-businessdialog/select-personal-businessdialog.component';
import {ForgotpassworddialogComponent} from './popup/forgotpassworddialog/forgotpassworddialog.component';
import { LoaderService } from './services/loader.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {LoaderInterceptor} from './loader.interceptor';
import {SelectKeywordComponent} from './popup/select-keyword/select-keyword.component';
import {EnquiryComponent} from './enquiryModule/enquiry/enquiry.component';
import {LoaderenquiryComponent} from './components/shared/loaderenquiry/loaderenquiry.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// R and D works
import { SearchautoComponent } from './RandD/searchauto/searchauto.component';
import { ValidatorsComponent } from './RandD/validators/validators.component'
import { EventEmitterService } from './event-emitter.service';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { from } from 'rxjs';
import { FuseSidebarComponent } from '@fuse/components/sidebar/sidebar.component';



@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        DialogComponent,
        EnquiryComponent,
        NextdialogComponent,
        VendorsavedialogComponent,
        VendorkeyworddeletedialogComponent,
        VendorEmailChangedialogComponent,
        ForgotpassworddialogComponent,
        SelectProducrServicedialogComponent,
        SelectPersonalBusinessdialogComponent,
        SelectKeywordComponent,
        ProfiledefaultComponent,
        LoaderenquiryComponent,
        


        //R and D works

        SearchautoComponent,
        ValidatorsComponent,
        SelectKeywordComponent,
        ProfiledefaultComponent,
        

    ],
    entryComponents: [
        DialogComponent,
        NextdialogComponent,
        VendorsavedialogComponent,
        VendorkeyworddeletedialogComponent,
        VendorEmailChangedialogComponent,
        SelectProducrServicedialogComponent,
        SelectPersonalBusinessdialogComponent,
        SelectKeywordComponent,
        ForgotpassworddialogComponent


    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
       
        TranslateModule.forRoot(),
        // Material moment date module
        MatMomentDateModule,
        FuseConfirmDialogModule,
       
        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,
        RecaptchaModule,
        RecaptchaFormsModule,
   
        LayoutModule,
        AppMaterialModule,
        AppRoutingModule,
   
        MatDatepickerModule,
        MatProgressSpinnerModule
    
       
    ],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },
                 EventEmitterService,
                 LoaderService,
                 { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
                //  {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}//for convert time format to dd/mm/yy from mm/dd/yy format
                ],
    bootstrap: [
        AppComponent
    ],

    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
