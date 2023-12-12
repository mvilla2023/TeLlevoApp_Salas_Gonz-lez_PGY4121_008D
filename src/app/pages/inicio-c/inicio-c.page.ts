import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ApiService } from 'src/app/servicios/api.service';


@Component({
  selector: 'app-inicio-c',
  templateUrl: './inicio-c.page.html',
  styleUrls: ['./inicio-c.page.scss'],
})
export class InicioCPage implements OnInit {

  nombre: any;

  constructor(private menuController: MenuController,
              private apiService: ApiService,
              private router: Router) { }

  ngOnInit() {
    this.nombre = sessionStorage.getItem('nombre');
  }

  goToPerfilCPage() {
    this.router.navigate(['/perfil-c']);
    }


  logout(){
    sessionStorage.removeItem('nombre');
    sessionStorage.removeItem('patente');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('password');
    this.router.navigate(['/opcion'])
  }
}
