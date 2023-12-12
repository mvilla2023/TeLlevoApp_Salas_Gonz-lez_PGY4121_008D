import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-password-p',
  templateUrl: './password-p.page.html',
  styleUrls: ['./password-p.page.scss'],
})
export class PasswordPPage implements OnInit {

    pasajero = {
      password:'',
    }
  
    constructor(private authservice: AuthService,
                private router: Router, 
                private alertcontroller: AlertController) { }
  
    ngOnInit() {
    }
  
    ionViewWillEnter(){
      this.getPasajeroById(this.getIdFromUrl());
    }
  
    getIdFromUrl(){
      let url=this.router.url;
      let arr=url.split("/",3);
      let id = parseInt(arr[2]);
      return id;
    }
  
    getPasajeroById(nombreID:number){
      this.authservice.BuscarPasajeroId(nombreID).subscribe(
        (resp:any)=>{                 
          console.log(resp);
          this.pasajero={
            password: resp[0].password,
          }
        }
        
      )
    }
  
    ActualizarPasswordP(){
      this.authservice.ActualizarPasswordC(this.pasajero).subscribe();
      this.mostrarMensaje();
      this.router.navigateByUrl("/login-p");
    }
  
    async mostrarMensaje(){
      const alerta = await this.alertcontroller.create({
        header: 'Contraseña actualizada ',
        message: 'Su contraseña ha sido modificada ' + this.pasajero.password,
        buttons: ['OK']
      });
      alerta.present();
    }
  
  
  }