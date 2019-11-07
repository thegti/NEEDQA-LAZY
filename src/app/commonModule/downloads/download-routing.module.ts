import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DownloadsComponent} from "./component/downloads.component";

const routes: Routes = [
    //   {
    //     path: '', 
    //     redirectTo: '/home',
    //     pathMatch: 'full'
    // },
  {
    path: '',
    component: DownloadsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DownloadsRoutingModule{

}