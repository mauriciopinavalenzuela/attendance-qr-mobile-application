import { Component, OnInit } from '@angular/core';
import { ApiCrudService } from 'src/app/servicios/apicrud.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.page.html',
  styleUrls: ['./actualizar.page.scss'],
})
export class ActualizarPage implements OnInit {

  usuario = {
    id: 0,
    nombreCompleto: "",
    email: "",
    password: "",
    username: "",
    role: ""
  };

  constructor(
    private apiCrud: ApiCrudService,
    private router: Router,
    private toastController: ToastController
  ) { }

  ionViewWillEnter() {
    this.getUsuarioById(this.getIdFromUrl());
  }

  ngOnInit() { }

  getIdFromUrl() {
    let url = this.router.url;
    let arr = url.split("/", 3);
    let id = parseInt(arr[2]);
    return id;
  }

  getUsuarioById(usuarioID: number) {
    this.apiCrud.BuscarUsuarioPorId(usuarioID).subscribe(
      (resp: any) => {
        this.usuario = {
          id: resp[0].id,
          nombreCompleto: resp[0].nombreCompleto,
          email: resp[0].email,
          password: resp[0].password,
          username: resp[0].username,
          role: resp[0].role
        };
      }
    );
  }

  async updateUsuario() {
    this.apiCrud.ActualizarUsuario(this.usuario).subscribe(
      () => {
        this.presentToast('Datos actualizados correctamente');
        this.redirigirSegunRol();
      },
      (error) => {
        console.error('Error al actualizar usuario:', error);
        this.presentToast('Error al actualizar usuario');
      }
    );
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: 'success', // o el color que prefieras
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

  redirigirSegunRol() {
    const role = sessionStorage.getItem('userrole');
    if (role === 'docente') {
      this.router.navigate(['/homedocente']);
    } else if (role === 'alumno') {
      this.router.navigate(['/homealumno']);
    }
  }
}
