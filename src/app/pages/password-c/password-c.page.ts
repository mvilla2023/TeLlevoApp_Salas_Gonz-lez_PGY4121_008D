import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-password-c',
  templateUrl: './password-c.page.html',
  styleUrls: ['./password-c.page.scss'],
})
export class PasswordCPage implements OnInit {

    conductor = {
      password:'',
    }
  
    constructor(private authservice: AuthService,
                private router: Router, 
                private alertcontroller: AlertController) { }
  
    ngOnInit() {
    }
  
    ionViewWillEnter(){
      this.getConductorById(this.getIdFromUrl());
    }
  
    getIdFromUrl(){
      let url=this.router.url;
      let arr=url.split("/",3);
      let id = parseInt(arr[2]);
      return id;
    }
  
    getConductorById(nombreID:number){
      this.authservice.BuscarConductorId(nombreID).subscribe(
        (resp:any)=>{                 
          console.log(resp);
          this.conductor={
            password: resp[0].password,
          }
        }
        
      )
    }
  
    ActualizarPasswordC(){
      this.authservice.ActualizarPasswordC(this.conductor).subscribe();
      this.mostrarMensaje();
      this.router.navigateByUrl("/login-c");
    }
  
    async mostrarMensaje(){
      const alerta = await this.alertcontroller.create({
        header: 'Contraseña actualizada ',
        message: 'Su contraseña ha sido modificada ' + this.conductor.password,
        buttons: ['OK']
      });
      alerta.present();
    }
  
  
  }