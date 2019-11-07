import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './authentication/auth.guard';
import { EnquiryComponent } from './enquiryModule/enquiry/enquiry.component';
import { AppCustomPreloader } from './AppCustomPreloader';
import { ProfiledefaultComponent } from './profiledefault/profiledefault.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },

 
    {
        path: 'home',
        component: EnquiryComponent

    },
   
    {
        path: 'supplier',

        loadChildren: './supplierRegistrationModule/supplier.module#SupplierModule',

        data: { preload: true }
    },
    {
        path: 'report',

        loadChildren: './reportModule/report.module#ReportModule'
    },
    {
        path: 'vendorprofile',

        loadChildren: './vendorProfileModule/vendorprofile.module#VendorProfileModule',

        canActivate: [AuthGuard]
    },
    {
        path: 'vendorlisting',

        loadChildren: './vendorlistingModule/vendorlisting.module#VendorListingModule',

        canActivate: [AuthGuard]
    },
    {
        path: 'ihave',

        loadChildren: './commonModule/ihave/ihave.module#IhaveModule',
    },
  
    {
        path: 'about',

        loadChildren: './commonModule/about/about.module#AboutModule',
    },
    {
        path: 'faq',

        loadChildren: './commonModule/faq/faq.module#FaqModule',
    },


    {
        path: 'pricing',

        loadChildren: './commonModule/pricing/pricing.module#PricingModule',

        // canActivate: [AuthGuard]
    },
    {
        path: 'terms',

        loadChildren: './commonModule/terms/terms.module#TermsModule',
    },
    {
        path: 'privacy',

        loadChildren: './commonModule/privacy-policy/privacy.module#PrivacyModule',
    },
    {
        path: 'contact',

        loadChildren: './commonModule/contact-us/contact.module#ContactUsModule',
    },
    {
        path: 'login',

        loadChildren: './commonModule/login/login.module#LoginModule',
    },
    {
        path: 'payment',

        loadChildren: './commonModule/payment/payment.module#PaymentModule',
    },
    {
        path: 'downloads/:key',

        loadChildren: './commonModule/downloads/download.module#DownloadModule',
    },


    {
        path: 'ActivateSupplier/:key',

        loadChildren: './commonModule/activateSupplier/activatesupplier.module#ActivateSupplierModule',
    },
    {
        path: 'resetpassword/:key',

        loadChildren: './commonModule/forgotpassword/forgotpassword.module#ForgotpasswordModule',
    },
    {
        path: 'profile',

        component: ProfiledefaultComponent
    },
    // {
    //     path: 'about', 
    //     component: AboutComponent
    // },
    // {
    //     path: 'faq', 
    //     component: FaqComponent
    // },
    // {
    //     path: 'pricing', 

    //     component: PricingComponent
    // },
    // {
    //     path: 'terms', 

    //     component: TermsComponent
    // },
    // {
    //     path: 'privacy', 

    //     component: PrivacyPolicyComponent
    // },
    // {
    //     path: 'contact', 

    //     component: ContactUsComponent
    // },
    // {
    //     path: 'ihave', 

    //     component: IhaveComponent
    // },
    // {
    //     path: 'login', 

    //     component: LoginComponent
    // },
    // {
    //     path: 'supplier', 

    //     component: SupplierRegistrationComponent
    // },
    // {
    //     path: 'vendorprofile', 

    //     component: VendorprofileComponent,

    //     canActivate: [AuthGuard]
    // },

    // {
    //     path: 'test', 

    //     component: TestComponent
    // },

    //    {
    //     path: 'vendorlisting', 

    //     component: VendorlistingComponent,
    //     canActivate: [AuthGuard]
    //    },
    //    {
    //     path: 'payment', 

    //     component: PaymentComponent
    //    },
    //    {
    //        path: 'downloads/:key',
    //        component: DownloadsComponent
    //    },
    //    {
    //     path: 'report',
    //     component: ReportComponent
    // },
    // // R and D works

    // {
    //     path: 'searchauto', 

    //     component: SearchautoComponent

    // },
    // {
    //     path: 'validation', 

    //     component: ValidatorsComponent

    // }

]

@NgModule({

    imports: [
        RouterModule.forRoot(appRoutes, { preloadingStrategy: AppCustomPreloader }),
    ],
    exports: [RouterModule],
    providers: [AppCustomPreloader]
})
export class AppRoutingModule { }
