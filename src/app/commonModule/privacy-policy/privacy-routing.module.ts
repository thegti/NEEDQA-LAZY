import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PrivacyPolicyComponent} from "./component/privacy-policy.component";

const routes: Routes = [
    //   {
    //     path: '', 
    //     redirectTo: '/home',
    //     pathMatch: 'full'
    // },
  {
    path: '',
    component: PrivacyPolicyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PrivacyRoutingModule{

}