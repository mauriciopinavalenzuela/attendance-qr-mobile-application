import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ApiCrudService } from 'src/app/servicios/apicrud.service';
import { AuthService } from '../../servicios/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage {
  recuperarForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastController: ToastController,
    private apiCrud: ApiCrudService,
    private authService: AuthService,
    private router: Router // Importar Router
  ) {
    this.recuperarForm = this.fb.group({
      username: ['', [Validators.required]],
    });
  }

  async recuperar(event: Event) {
    event.preventDefault();
    
    if (this.recuperarForm.valid) {
      const nombreUsuario = this.recuperarForm.get('username')?.value;

      try {
        // Obtener la lista actualizada de usuarios
        const usuariosResponse = await this.authService.getAllUsers().toPromise();
        const usuarios = usuariosResponse || [];

        // Buscar el usuario por nombre de usuario
        const usuario = usuarios.find(user => user.username === nombreUsuario);

        if (!usuario) {
          this.mostrarToast('Usuario no existe, debe registrarse');
        } else {
          // No hay acciones específicas para un usuario autenticado, solo mostrar mensajes
          this.mostrarToast('Usuario autenticado');

          // Redirigir a la página privada
          this.router.navigate(['/private']); // Reemplaza '/private' con tu ruta real
        }
      } catch (error) {
        console.error('Error al obtener usuarios', error);
        this.mostrarToast('Error al autenticar, inténtelo de nuevo');
      }
    }
  }

  ngOnInit() {}

  async mostrarToast(message: string) {
    const nombreUsuario = sessionStorage.getItem('username') || '';

    const toast = await this.toastController.create({
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
