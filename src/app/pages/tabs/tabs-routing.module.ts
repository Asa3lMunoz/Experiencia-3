import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('./../../pages/inicio/inicio.module').then( m => m.InicioPageModule)
      },
        {
          path: 'alert',
          loadChildren: () => import('./../../pages/alert/alert.module').then( m => m.AlertPageModule)
        },
        {
          path: 'action-sheet',
          loadChildren: () => import('./../../pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
        },
        {
          path: 'gorros',
          loadChildren: () => import('./../../pages/gorros/gorros.module').then( m => m.GorrosPageModule)
        },
        {
          path: 'superior',
          loadChildren: () => import('./../../pages/superior/superior.module').then( m => m.SuperiorPageModule)
        },
        {
          path: 'inferior',
          loadChildren: () => import('./../../pages/inferior/inferior.module').then( m => m.InferiorPageModule)
        },
        {
          path: 'zapatillas',
          loadChildren: () => import('./../../pages/zapatillas/zapatillas.module').then( m => m.ZapatillasPageModule)
        },
        {
          path: 'favoritos',
          loadChildren: () => import('./../../pages/favoritos/favoritos.module').then( m => m.FavoritosPageModule)
        },
        {
          path: 'carrito',
          loadChildren: () => import('./../../pages/carrito/carrito.module').then( m => m.CarritoPageModule)
        },
        {
          path: 'configuracion',
          loadChildren: () => import('./../../pages/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
        },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
