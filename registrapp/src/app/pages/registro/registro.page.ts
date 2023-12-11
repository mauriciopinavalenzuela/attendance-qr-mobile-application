import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';
import { Users } from '../interfaces/interfaces';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  formularioRegistro: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastCtrl: ToastController,
    private router: Router,
    private authService: AuthService
  ) {
this.formularioRegistro = this.fb.group({
  nombreCompleto: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
  username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
  email: ['', [Validators.required, Validators.email]],
  role: ['', [Validators.required]],
  password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
  sede: ['', [Validators.required]],
  asignatura1: [''],
  asignatura2: [''],
  periodoAcademico: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(6)]],
});
  }

  async crearCuenta(event: Event) {
    event.preventDefault();

    if (this.formularioRegistro.valid) {
      const nuevoUsuario: Users = this.formularioRegistro.value;

      this.authService.registrarUsuario(nuevoUsuario).subscribe(
        (usuarioRegistrado) => {
          // Maneja la respuesta del servidor, si es necesario
          console.log('Usuario registrado:', usuarioRegistrado);
          this.mostrarToast('Usuario registrado correctamente');
          // Redirige al login u otra página si es necesario
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Error al registrar usuario:', error);
          // Maneja el error y muestra un mensaje de error si es necesario
          this.mostrarToast('Error al registrar usuario');
        }
      );
    }
  }

  async mostrarToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      color: 'success',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'checkmark-circle',
        },
      ],
    });
    toast.present();
  }
}
