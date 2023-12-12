import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarCPage } from './actualizar-c.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarCPageRoutingModule {}
