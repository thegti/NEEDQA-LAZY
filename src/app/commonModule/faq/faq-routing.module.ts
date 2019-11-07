import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FaqComponent} from "./component/faq.component";

const routes: Routes = [
    //   {
    //     path: '', 
    //     redirectTo: '/home',
    //     pathMatch: 'full'
    // },
  {
    path: '',
    component: FaqComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FaqRoutingModule{

}