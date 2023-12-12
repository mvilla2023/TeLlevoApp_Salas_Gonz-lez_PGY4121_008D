import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutorizadoGuard } from './guards/autorizado.guard';


const routes: Routes = [
    {
    path: '',
    redirectTo: 'opcion',
    pathMatch: 'full'
  },
  {
    path: 'registro-c',
    loadChildren: () => import('./pages/registro-c/registro-c.module').then( m => m.RegistroCPageModule)
  },
  {
    path: 'registro-p',
    loadChildren: () => import('./pages/registro-p/registro-p.module').then( m => m.RegistroPPageModule)
  },
  {
    path: 'login-c',
    loadChildren: () => import('./pages/login-c/login-c.module').then( m => m.LoginCPageModule)
  },
  {
    path: 'opcion',
    loadChildren: () => import('./pages/opcion/opcion.module').then( m => m.OpcionPageModule)
  },
  {
    path: 'login-p',
    loadChildren: () => import('./pages/login-p/login-p.module').then( m => m.LoginPPageModule)
  },
  {
    path: 'inicio-c',
    loadChildren: () => import('./pages/inicio-c/inicio-c.module').then( m => m.InicioCPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'inicio-p',
    loadChildren: () => import('./pages/inicio-p/inicio-p.module').then( m => m.InicioPPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'perfil-c',
    loadChildren: () => import('./pages/perfil-c/perfil-c.module').then( m => m.PerfilCPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'perfil-p',
    loadChildren: () => import('./pages/perfil-p/perfil-p.module').then( m => m.PerfilPPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'actualizar-c',
    loadChildren: () => import('./pages/actualizar-c/actualizar-c.module').then( m => m.ActualizarCPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'actualizar-p',
    loadChildren: () => import('./pages/actualizar-p/actualizar-p.module').then( m => m.ActualizarPPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'form-viaje',
    loadChildren: () => import('./pages/form-viaje/form-viaje.module').then( m => m.FormViajePageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'password-c',
    loadChildren: () => import('./pages/password-c/password-c.module').then( m => m.PasswordCPageModule)
  },
  {
    path: 'password-p',
    loadChildren: () => import('./pages/password-p/password-p.module').then( m => m.PasswordPPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
