import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProFileComponent} from "./components/pro-file/pro-file.component";

const routes: Routes = [{path:'', component:ProFileComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalPageRoutingModule { }
