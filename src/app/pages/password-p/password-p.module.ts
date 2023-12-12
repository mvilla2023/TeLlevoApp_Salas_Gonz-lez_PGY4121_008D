import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasswordPPageRoutingModule } from './password-p-routing.module';

import { PasswordPPage } from './password-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasswordPPageRoutingModule
  ],
  declarations: [PasswordPPage]
})
export class PasswordPPageModule {}
