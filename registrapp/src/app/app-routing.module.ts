import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutorizadoGuard } from '../app/guards/autorizado.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./pages/nosotros/nosotros.module').then(m => m.NosotrosPageModule),
    canActivate: [AutorizadoGuard], // Agrega el guardia aquí si es necesario
  },
  {
    path: 'ajustes',
    loadChildren: () => import('./pages/ajustes/ajustes.module').then(m => m.AjustesPageModule),
    canActivate: [AutorizadoGuard],
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule),
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then(m => m.RegistroPageModule),
  },
  {
    path: 'homedocente',
    loadChildren: () => import('./pages/homedocente/homedocente.module').then(m => m.HomedocentePageModule),
    canActivate: [AutorizadoGuard],
  },
  {
    path: 'homealumno',
    loadChildren: () => import('./pages/homealumno/homealumno.module').then(m => m.HomealumnoPageModule),
    canActivate: [AutorizadoGuard],
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pages/noticias/noticias.module').then( m => m.NoticiasPageModule),
    canActivate: [AutorizadoGuard],
  },
  {
    path: 'listar',
    loadChildren: () => import('./pages/listar/listar.module').then( m => m.ListarPageModule)
  },
  {
    path: 'detalle/:id',
    loadChildren: () => import('./pages/detalle/detalle.module').then( m => m.DetallePageModule)
  },
  {
    path: 'generar-qr',
    loadChildren: () => import('./pages/generar-qr/generar-qr.module').then( m => m.GenerarQrPageModule)
  },
  {
    path: 'escanear-qr',
    loadChildren: () => import('./pages/escanear-qr/escanear-qr.module').then( m => m.EscanearQrPageModule)
  },
    
  {
    path: 'actualizar/:id',
    loadChildren: () => import('./pages/actualizar/actualizar.module').then( m => m.ActualizarPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./pages/recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'private',
    loadChildren: () => import('./pages/private/private.module').then( m => m.PrivatePageModule)
  },
  {
    path: 'eliminar/:id',
    loadChildren: () => import('./pages/eliminar/eliminar.module').then( m => m.EliminarPageModule)
  },
  {
    path: 'recuperar-pass',
    loadChildren: () => import('./pages/recuperar-pass/recuperar-pass.module').then( m => m.RecuperarPassPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
