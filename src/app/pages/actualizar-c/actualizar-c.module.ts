import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarCPageRoutingModule } from './actualizar-c-routing.module';

import { ActualizarCPage } from './actualizar-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarCPageRoutingModule
  ],
  declarations: [ActualizarCPage]
})
export class ActualizarCPageModule {}
