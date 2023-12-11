import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  usuarios: any[] = [];

  constructor(
    private fb: FormBuilder,
    private toastCtrl: ToastController,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]
    });
  }

  async ingresar(event: Event) {
    event.preventDefault();
    
    if (this.loginForm.valid) {
      const nombreUsuario = this.loginForm.get('username')?.value;
      const contraseña = this.loginForm.get('password')?.value;

      try {
        // Obtener la lista actualizada de usuarios
        const usuariosResponse = await this.authService.getAllUsers().toPromise();
        const usuarios = usuariosResponse || [];

        // Buscar el usuario por nombre de usuario
        const usuario = usuarios.find(user => user.username === nombreUsuario);

        if (!usuario) {
          this.mostrarToast('Usuario no existe, debe registrarse');
        } else if (usuario.password !== contraseña) {
          this.mostrarToast('Revise sus credenciales');
        } else {
          // Usuario autenticado, realiza las operaciones necesarias
          sessionStorage.setItem('username', nombreUsuario);
          sessionStorage.setItem('userrole', usuario.role);

          // Redirigir según el rol
          this.redirigirSegunRol();
        }
      } catch (error) {
        console.error('Error al obtener usuarios', error);
        this.mostrarToast('Error al autenticar, inténtelo de nuevo');
      }
    }
  }

  redirigirSegunRol() {
    const role = sessionStorage.getItem('userrole');
    if (role === 'docente') {
      this.router.navigate(['/homedocente']);
    } else if (role === 'alumno') {
      this.router.navigate(['/homealumno']);
    }

    this.mostrarToast('Has iniciado sesión exitosamente');
  }

  ngOnInit() {}

  async mostrarToast(message: string) {
    const nombreUsuario = sessionStorage.getItem('username') || '';

    const toast = await this.toastCtrl.create({
      message: `Hola, ${nombreUsuario} ${message}`,
      duration: 2000,
      color: 'success',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'happy',
        },
      ],
    });

    toast.present();
  }
}
