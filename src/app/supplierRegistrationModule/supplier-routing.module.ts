import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SupplierRegistrationComponent} from "./supplier-registration/supplier-registration.component";


const routes: Routes = [
  {
    path: '',
    component: SupplierRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
 
],
  exports: [RouterModule]
})

export class SupplierRoutingModule{

}