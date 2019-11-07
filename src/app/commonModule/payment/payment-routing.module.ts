import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PaymentComponent} from "./component/payment.component";

const routes: Routes = [
    //   {
    //     path: '', 
    //     redirectTo: '/home',
    //     pathMatch: 'full'
    // },
  {
    path: '',
    component: PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PaymentRoutingModule{

}