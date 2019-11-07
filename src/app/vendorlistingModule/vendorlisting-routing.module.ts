import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {VendorlistingComponent} from "./vendorlisting/vendorlisting.component";

const routes: Routes = [
  {
    path: '',
    component: VendorlistingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class VendorListingRoutingModule{

}