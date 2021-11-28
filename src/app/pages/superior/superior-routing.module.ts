import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperiorPage } from './superior.page';

const routes: Routes = [
  {
    path: '',
    component: SuperiorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperiorPageRoutingModule {}
