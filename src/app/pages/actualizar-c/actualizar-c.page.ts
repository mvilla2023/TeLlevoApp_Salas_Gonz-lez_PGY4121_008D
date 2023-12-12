import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-actualizar-c',
  templateUrl: './actualizar-c.page.html',
  styleUrls: ['./actualizar-c.page.scss'],
})
export class ActualizarCPage implements OnInit {

  conductor = {
    id:0,
    nombre: '',
    password:'',
    patente:'', 
    email: '',
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
          id: resp[0].id,
          nombre: resp[0].nombre,
          password: resp[0].password,
          patente: resp[0].patente,
          email: resp[0].email
        }
      }
      
    )
  }

  ActualizarConductor(){
    this.authservice.ActualizarConductor(this.conductor).subscribe();
    this.mostrarMensaje();
    this.router.navigateByUrl("/perfil-c");
  }

  async mostrarMensaje(){
    const alerta = await this.alertcontroller.create({
      header: 'Conductor Actualizado ',
      message: 'Su información se ha modificado ' + this.conductor.nombre,
      buttons: ['OK']
    });
    alerta.present();
  }


}

