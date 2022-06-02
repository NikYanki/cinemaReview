import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import {ProFileComponent} from "./components/pro-file/pro-file.component";
import {ProFileService} from "./sevice/pro-file.service";
import {ProFileResolver} from "./components/pro-file/pro-file.resolver";

const routes: Routes = [{path: '', component: ProFileComponent, resolve: {userData: ProFileResolver}}];

@NgModule({
  imports: [RouterModule.forChild(routes),
    HttpClientModule],
  exports: [RouterModule],
  providers: [ProFileService]
})
export class PersonalPageRoutingModule {
}
