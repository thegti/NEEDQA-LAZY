import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {VendorprofileComponent} from "./vendorprofile/vendorprofile.component";

const routes: Routes = [
  {
    path: '',
    component: VendorprofileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class VendorprofileRoutingModule{

}