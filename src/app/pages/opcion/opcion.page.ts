import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { ApiService } from 'src/app/servicios/api.service';


@Component({
  selector: 'app-opcion',
  templateUrl: './opcion.page.html',
  styleUrls: ['./opcion.page.scss'],
})
export class OpcionPage implements OnInit {

  constructor(private apiservice: ApiService,
    private router: Router) {

     }

  ngOnInit() {
  }

  goToLoginCPage() {
    this.router.navigate(['/login-c']);
    }
  
    goToLoginPPage() {
    this.router.navigate(['/login-p']);
    }

}
