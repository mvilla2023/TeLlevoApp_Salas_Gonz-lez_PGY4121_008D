import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login-p',
  templateUrl: './login-p.page.html',
  styleUrls: ['./login-p.page.scss'],
})
export class LoginPPage implements OnInit {

  userdata: any;

  pasajero={
    id: 0,
    nombre:"",
    password:"",
    email:"",
    isactive: true
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

  loginP(){
    if (this.loginForm.valid){
      this.authservice.GetPasajeroById(this.loginForm.value.nombre).subscribe(resp=>{
        this.userdata=resp;
        console.log(this.userdata);
        if (this.userdata.length>0){ 
          this.pasajero={            
            id : this.userdata[0].id,
            nombre: this.userdata[0].nombre,
            password: this.userdata[0].password,
            email: this.userdata[0].email,
            isactive: true
          }
          if (this.pasajero.password===this.loginForm.value.password){
            if (this.pasajero.isactive){
              sessionStorage.setItem('nombre', this.pasajero.nombre);
              sessionStorage.setItem('email', this.pasajero.email);
              sessionStorage.setItem('password', this.pasajero.password);
              this.showToast('Sesión Iniciada');
              this.router.navigateByUrl("/inicio-p");
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

  async UserInactivo(){
    const alerta = await this.alertController.create({
      header: "Error..",
      message: 'Usuario inactivo, contactar a admin@admin.cl',
      buttons: ['Ok']
    });
    alerta.present();
    return;
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


  goToRegistroPPage() {
  this.router.navigate(['/registro-p']);
  }

  goToPasswordPPage() {
    this.router.navigate(['/password-p']);
    }

}
