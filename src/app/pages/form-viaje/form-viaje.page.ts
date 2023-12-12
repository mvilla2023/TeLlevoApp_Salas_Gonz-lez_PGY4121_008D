import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api.service';
import { IViaje } from '../interfaces/interfaces';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-form-viaje',
  templateUrl: './form-viaje.page.html',
  styleUrls: ['./form-viaje.page.scss'],
})
export class FormViajePage implements OnInit {

  newViaje:IViaje={
    nombre:'',
    patente:'',
    valorViaje:"",
    destino:'',
    estado:'',
  }

  loginForm: FormGroup;

  constructor(private fbuilder: FormBuilder,
              private authservice: AuthService,
              private alertController: AlertController,
              private router: Router,
              private apiService: ApiService) {
                this.loginForm = fbuilder.group({
                  'nombre': new FormControl("", [Validators.required, Validators.minLength(3)]),
                  'patente': new FormControl("", [Validators.required, Validators.minLength(6)]),
                  'valorViaje': new FormControl ("", [Validators.required, Validators.maxLength(10)]),
                  'destino': new FormControl ("", [Validators.required, Validators.minLength(4)]),
                  'estado': new FormControl ("", [Validators.required, Validators.minLength(5)])
                })
            }

 ngOnInit() {
  }

  crearViaje(){
    this.newViaje.nombre = this.loginForm.value.nombre;
    this.newViaje.patente = this.loginForm.value.patente;
    this.newViaje.valorViaje = this.loginForm.value.valorViaje;
    this.newViaje.destino = this.loginForm.value.destino;
    this.newViaje.estado = this.loginForm.value.estado;
    this.authservice.crearViaje(this.newViaje).subscribe();
    this.mostrarMensaje();
    this.loginForm.reset();
    this.router.navigateByUrl("/inicio-p");
  }


async mostrarMensaje(){
  const alerta = await this.alertController.create({
    header: 'Viaje..',
    message: 'Se ha reservado el viaje!',
    buttons: ['Ok']
  });
  alerta.present();
}

}

