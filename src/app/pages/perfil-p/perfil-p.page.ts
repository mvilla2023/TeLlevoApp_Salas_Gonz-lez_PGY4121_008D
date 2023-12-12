import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-perfil-p',
  templateUrl: './perfil-p.page.html',
  styleUrls: ['./perfil-p.page.scss'],
})
export class PerfilPPage implements OnInit {

  nombre: any;
  email: any;
  password: any;

  showPassword: boolean = false;

  constructor(private apiService: ApiService,
              private router: Router) { }

  ngOnInit() {
    this.nombre = sessionStorage.getItem('nombre');
    this.email = sessionStorage.getItem('email');
    this.password = sessionStorage.getItem('password');
  }

  togglePasswordVisiblity(){
    this.showPassword = !this.showPassword;
  }

}
