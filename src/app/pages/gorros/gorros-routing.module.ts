import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GorrosPage } from './gorros.page';

const routes: Routes = [
  {
    path: '',
    component: GorrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GorrosPageRoutingModule {}
