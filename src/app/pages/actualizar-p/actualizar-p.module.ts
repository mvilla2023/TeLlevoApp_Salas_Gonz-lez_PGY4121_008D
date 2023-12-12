import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarPPageRoutingModule } from './actualizar-p-routing.module';

import { ActualizarPPage } from './actualizar-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarPPageRoutingModule
  ],
  declarations: [ActualizarPPage]
})
export class ActualizarPPageModule {}
