import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GorrosPageRoutingModule } from './gorros-routing.module';

import { GorrosPage } from './gorros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GorrosPageRoutingModule
  ],
  declarations: [GorrosPage]
})
export class GorrosPageModule {}
