import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api.service';
import { IPasajero } from '../interfaces/interfaces';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-registro-p',
  templateUrl: './registro-p.page.html',
  styleUrls: ['./registro-p.page.scss'],
})
export class RegistroPPage implements OnInit {

  newPasajero:IPasajero={
    nombre:'',
    email:'',
    password:'',
    isactive: true
  }

  loginForm: FormGroup;

  constructor(private fbuilder: FormBuilder,
              private authservice: AuthService,
              private alertController: AlertController,
              private router: Router,
              private apiService: ApiService) {
                this.loginForm = fbuilder.group({ 
                'nombre': new FormControl("", [Validators.required, Validators.minLength(4)]),
                  'email': new FormControl ("", [Validators.required, Validators.email]),
                  'password': new FormControl ("", [Validators.required, Validators.minLength(8)])
              })
            }

 ngOnInit() {
  }

  crearPasajero(){
    this.newPasajero.nombre = this.loginForm.value.nombre;
    this.newPasajero.email = this.loginForm.value.email;
    this.newPasajero.password = this.loginForm.value.password;
    this.authservice.crearPasajero(this.newPasajero).subscribe();
    this.mostrarMensaje();
    this.loginForm.reset();
    this.router.navigateByUrl("/login-p");
  }


async mostrarMensaje(){
  const alerta = await this.alertController.create({
    header: 'Pasajero..',
    message: 'Pasajero ha sido creado!',
    buttons: ['Ok']
  });
  alerta.present();
}

}

