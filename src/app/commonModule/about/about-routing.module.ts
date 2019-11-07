import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AboutComponent} from "./component/about.component";

const routes: Routes = [
    //   {
    //     path: '', 
    //     redirectTo: '/home',
    //     pathMatch: 'full'
    // },
  {
    path: '',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AboutRoutingModule{

}