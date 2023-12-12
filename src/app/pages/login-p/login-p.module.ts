import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPPageRoutingModule } from './login-p-routing.module';

import { LoginPPage } from './login-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LoginPPageRoutingModule
  ],
  declarations: [LoginPPage]
})
export class LoginPPageModule {}
