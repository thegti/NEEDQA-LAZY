import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {IhaveComponent} from "./component/ihave.component";

const routes: Routes = [
    //   {
    //     path: '', 
    //     redirectTo: '/home',
    //     pathMatch: 'full'
    // },
  {
    path: '',
    component: IhaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class IhaveRoutingModule{

}