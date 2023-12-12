import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasswordCPage } from './password-c.page';

const routes: Routes = [
  {
    path: '',
    component: PasswordCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasswordCPageRoutingModule {}
