import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasswordCPageRoutingModule } from './password-c-routing.module';

import { PasswordCPage } from './password-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasswordCPageRoutingModule
  ],
  declarations: [PasswordCPage]
})
export class PasswordCPageModule {}
