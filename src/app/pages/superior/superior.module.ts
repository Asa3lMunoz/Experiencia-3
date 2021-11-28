import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuperiorPageRoutingModule } from './superior-routing.module';

import { SuperiorPage } from './superior.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperiorPageRoutingModule
  ],
  declarations: [SuperiorPage]
})
export class SuperiorPageModule {}
