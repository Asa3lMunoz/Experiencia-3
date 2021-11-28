import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InferiorPageRoutingModule } from './inferior-routing.module';

import { InferiorPage } from './inferior.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InferiorPageRoutingModule
  ],
  declarations: [InferiorPage]
})
export class InferiorPageModule {}
