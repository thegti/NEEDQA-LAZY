import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ActivateSupplierComponent} from "../activateSupplier/component/activate-supplier.component";

const routes: Routes = [
  {
    path: '',
    component: ActivateSupplierComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ActivateSupplierRoutingModule{

}