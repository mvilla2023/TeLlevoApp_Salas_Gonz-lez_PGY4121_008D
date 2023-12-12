import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-actualizar-p',
  templateUrl: './actualizar-p.page.html',
  styleUrls: ['./actualizar-p.page.scss'],
})
export class ActualizarPPage implements OnInit {

  pasajero = {
    id:0,
    nombre: '',
    password:'',
    email: '',
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
          id: resp[0].id,
          nombre: resp[0].nombre,
          password: resp[0].password,
          email: resp[0].email
        }
      }
      
    )
  }

  ActualizarPasajero(){
    this.authservice.ActualizarPasajero(this.pasajero).subscribe();
    this.mostrarMensaje();
    this.router.navigateByUrl("/perfil-p");
  }

  async mostrarMensaje(){
    const alerta = await this.alertcontroller.create({
      header: 'Pasajero Actualizado ',
      message: 'Su información se ha modificado ' + this.pasajero.nombre,
      buttons: ['OK']
    });
    alerta.present();
  }


}

