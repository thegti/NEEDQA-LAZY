import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TermsComponent} from "./component/terms.component";

const routes: Routes = [
    //   {
    //     path: '', 
    //     redirectTo: '/home',
    //     pathMatch: 'full'
    // },
  {
    path: '',
    component: TermsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TermsRoutingModule{

}