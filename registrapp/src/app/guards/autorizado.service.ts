import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../servicios/auth.service';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AutorizadoGuard implements CanActivate {
  constructor(
    private authservice: AuthService,
    private toast: ToastController,
    private router: Router
  ) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      console.log('El guard está funcionando!'); 
    if (!this.authservice.isLoggedIn()) {
      this.showToast('Debe iniciar sesión'); // Muestra un mensaje de tostada si el usuario no está autenticado.
      return this.router.createUrlTree(['/login']); // Devuelve una UrlTree que redirige al usuario a la página de inicio de sesión.
    }
    // Si el usuario está autenticado, permite el acceso a la ruta protegida.
    return true;
  }

  async showToast(msg: any) {
    const toast = await this.toast.create({
      message: msg,
      duration: 3000,
      position: 'bottom' ,
    });
    toast.present();

    await toast.onDidDismiss();
  }
}
