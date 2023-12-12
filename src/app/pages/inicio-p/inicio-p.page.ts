import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApiService } from 'src/app/servicios/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-p',
  templateUrl: './inicio-p.page.html',
  styleUrls: ['./inicio-p.page.scss'],
})
export class InicioPPage implements OnInit {

  nombre: any;
  
  constructor(private menuController: MenuController,
              private apiService: ApiService,
              private router: Router) { }

  ngOnInit() {
    this.nombre = sessionStorage.getItem('nombre');
  }

  goToPerfilPPage() {
    this.router.navigate(['/perfil-p']);
    }

    goToFormViajePage() {
      this.router.navigate(['/form-viaje']);
      }

  logout(){
    sessionStorage.removeItem('nombre');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('password');
    this.router.navigate(['/opcion'])
  }
}
