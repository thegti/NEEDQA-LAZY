import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ContactUsComponent} from "./component/contact-us.component";

const routes: Routes = [
    //   {
    //     path: '', 
    //     redirectTo: '/home',
    //     pathMatch: 'full'
    // },
  {
    path: '',
    component: ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ContactUsRoutingModule{

}