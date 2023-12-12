import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarPPage } from './actualizar-p.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarPPageRoutingModule {}
