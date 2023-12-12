import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api.service';
import { IConductor } from '../interfaces/interfaces';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-registro-c',
  templateUrl: './registro-c.page.html',
  styleUrls: ['./registro-c.page.scss'],
})
export class RegistroCPage implements OnInit {

  newConductor:IConductor={
    nombre:'',
    patente:'',
    email:'',
    password:''
  }

  loginForm: FormGroup;


  constructor(private fbuilder: FormBuilder,
              private authservice: AuthService,
              private apiService: ApiService,
              private router: Router,
              private alertController: AlertController) { 
                this.loginForm = fbuilder.group({
                  'nombre': new FormControl("", [Validators.required, Validators.minLength(4)]),
                  'patente': new FormControl("", [Validators.required, Validators.minLength(6)]),
                  'email': new FormControl ("", [Validators.required, Validators.email]),
                  'password': new FormControl ("", [Validators.required, Validators.minLength(8)])
                })
              }



  ngOnInit() {
  }

  crearConductor(){
    this.newConductor.nombre = this.loginForm.value.nombre;
    this.newConductor.patente = this.loginForm.value.patente;
    this.newConductor.email = this.loginForm.value.email;
    this.newConductor.password = this.loginForm.value.password;
    this.authservice.crearConductor(this.newConductor).subscribe();
    this.mostrarMensaje();
    this.loginForm.reset();
    this.router.navigateByUrl("/login-c");
  }

async mostrarMensaje(){
  const alerta = await this.alertController.create({
    header: 'Conductor..',
    message: 'Conductor ha sido creado!',
    buttons: ['Ok']
  });
  alerta.present();
}




    
    

  }

