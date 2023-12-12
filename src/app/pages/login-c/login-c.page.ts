import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { IConductor, IConductores } from '../interfaces/interfaces';


@Component({
  selector: 'app-login-c',
  templateUrl: './login-c.page.html',
  styleUrls: ['./login-c.page.scss'],
})
export class LoginCPage implements OnInit {

  userdata: any;

  conductor={
    id:0,
    nombre:"",
    patente:"",
    email:"",
    password:""
  }

  loginForm: FormGroup;

  constructor(private authservice: AuthService,
              private router: Router,
              private toastController: ToastController,
              private alertController: AlertController,
              private builder: FormBuilder) {
      this.loginForm = this.builder.group({
        'nombre': new FormControl("", [Validators.required, Validators.minLength(4)]),
        'password': new FormControl("", [Validators.required, Validators.minLength(8)]),
      })
     }


  ngOnInit() {
    }

  loginC(){
    if (this.loginForm.valid){
      this.authservice.GetConductorById(this.loginForm.value.nombre).subscribe(resp=>{
        this.userdata=resp;
        console.log(this.userdata);
        if (this.userdata.length>0){ 
          this.conductor={            
            id : this.userdata[0].id,
            nombre: this.userdata[0].nombre,
            patente: this.userdata[0].patente,
            email: this.userdata[0].email,
            password: this.userdata[0].password
          }
          if (this.conductor.password===this.loginForm.value.password){
            if (this.conductor.nombre){
              sessionStorage.setItem('nombre', this.conductor.nombre);
              sessionStorage.setItem('patente', this.conductor.patente);
              sessionStorage.setItem('email', this.conductor.email);
              sessionStorage.setItem('password', this.conductor.password);
              this.showToast('Sesión Iniciada');
              this.router.navigateByUrl("/inicio-c");
            }
          }
          else{
            this.DatoError();
            this.loginForm.reset();
          }
        }
        else{
          this.NoExiste();
          this.loginForm.reset();
        }
      })
    }
    }
  async showToast(msg: any){
    const toast= await this.toastController.create({
      message:msg,
      duration: 3000
    })
    toast.present();
  }

  async DatoError(){
    const alerta = await this.alertController.create({
      header: "Error..",
      message: 'Revise sus credenciales',
      buttons: ['Ok']
    });
    alerta.present();
    return;
  }

  async NoExiste(){
    const alerta = await this.alertController.create({
      header: "Debe registrarse..",
      message: 'El usuario no existe',
      buttons: ['Ok']
    });
    alerta.present();
    return;
  }


  goToRegistroCPage() {
  this.router.navigate(['/registro-c']);
  }

  goToPasswordCPage() {
    this.router.navigate(['/password-c']);
    }

}
