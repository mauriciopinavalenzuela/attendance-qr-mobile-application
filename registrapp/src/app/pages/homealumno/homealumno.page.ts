import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homealumno',
  templateUrl: './homealumno.page.html',
  styleUrls: ['./homealumno.page.scss'],
})
export class HomealumnoPage implements OnInit {
  inactivityTimer: any;
  router: any;
  usuario: any;
  

  constructor(private menuCtrl: MenuController, private toastCtrl: ToastController) {}

  mostrarMenu() {
    this.menuCtrl.enable(true, 'first');
    this.menuCtrl.open('first');
  }

  async mostrarToast(message: string) {
    const nombreUsuario = this.usuario ? this.usuario.username : '';

    const toast = await this.toastCtrl.create({
      message: `¡Hola! ${nombreUsuario} ${message}`,
      duration: 2000,
      color: 'success',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'sad',
        },
      ],
    });
    toast.present();
  }

  // Reiniciar el temporizador de inactividad
  reiniciarTemporizador() {
    clearTimeout(this.inactivityTimer);
    this.inactivityTimer = setTimeout(() => {
      this.mostrarToast('Usuario Inactivo, será redirigido al inicio de sesión');
      this.router.navigateByUrl('/login');
    }, 60 * 1000);
  }

  ngOnInit() {
    this.usuario = sessionStorage.getItem('username') || '';
    this.inactivityTimer = setTimeout(() => {
      this.mostrarToast('Usuario Inactivo, será redirigido al inicio de sesión');
      this.router.navigateByUrl('/login');
    }, 60 * 1000);
  }
}
