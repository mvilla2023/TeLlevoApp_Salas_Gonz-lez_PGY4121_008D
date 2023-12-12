import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-perfil-c',
  templateUrl: './perfil-c.page.html',
  styleUrls: ['./perfil-c.page.scss'],
})
export class PerfilCPage implements OnInit {

  nombre: any;
  patente: any;
  email: any;
  password: any;

  showPassword: boolean = false;

  constructor(private apiService: ApiService,
              private router: Router) { }

  ngOnInit() {
    this.nombre = sessionStorage.getItem('nombre');
    this.patente = sessionStorage.getItem('patente');
    this.email = sessionStorage.getItem('email');
    this.password = sessionStorage.getItem('password');
  }

  togglePasswordVisiblity(){
    this.showPassword = !this.showPassword;
  }

}
