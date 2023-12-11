import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';
import { IAsignaturas, IAsistencia, Iasistencias, Users } from '../interfaces/interfaces';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
})
export class GenerarQrPage implements OnInit {

  isGenerated: boolean = false;
  qrCodeString = 'Debe ingresar la asignatura y generar el código QR.';
  scannedResult: any;
  fecha = new Date();
  fechaActual = this.fecha.getDate() + '/' + (this.fecha.getMonth() + 1) + '/' + this.fecha.getFullYear();

  asignaturas: IAsignaturas = { asignatura1: '', asignatura2: '' };

  mostrarMenu() {
    this.menuCtrl.enable(true, 'first');
    this.menuCtrl.open('first');
  }

  constructor(
    private menuCtrl: MenuController,
    private toastCtrl: ToastController,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
    this.getAsignaturas();
  }

  datos: Iasistencias = {
    asignatura: "",
    fecha: this.fechaActual
  }

  generarQr() {
    this.qrCodeString = 'Nombre de Asignatura: ' + this.datos.asignatura + ' / ' + '\nFecha de Generación QR: ' + this.datos.fecha;
  }

  async qrGenerado() {
    const toast = await this.toastCtrl.create({
      message: 'Código QR generado exitosamente!',
      duration: 1500,
      icon: 'happy-outline'
    });

    await toast.present();

    // Llamar a la función para registrar la asistencia al escanear el código QR
    this.registrarAsistencia();
  }

  verQr() {
    this.scannedResult = this.qrCodeString;
  }

  getAsignaturas() {
    const username = 'datadriven'; // Reemplaza esto con la lógica para obtener el nombre de usuario actual
    this.authService.getAsignaturasByUsername(username)
      .subscribe(
        asignaturas => {
          this.asignaturas = asignaturas;
        },
        error => {
          console.error(error);
        }
      );
  }

  // Nueva función para registrar la asistencia al escanear el código QR
  registrarAsistencia() {
    // Verificar que la asignatura no esté vacía
    if (!this.datos.asignatura) {
      console.error('Error: Debe ingresar la asignatura antes de escanear el código QR.');
      return;
    }
  
    // Obtener la fecha actual
    const fechaActual = new Date();
    const fecha = fechaActual.getDate() + '/' + (fechaActual.getMonth() + 1) + '/' + fechaActual.getFullYear();
  
    // Crear objeto de asistencia
    const asistencia: IAsistencia = {
      id: 0, // Puedes asignar el valor que sea necesario, depende de tu lógica de generación de ID
      asignatura: this.datos.asignatura,
      fecha: fecha,
    };
  
    // Llamar a la función en tu servicio para registrar la asistencia en el servidor
    this.authService.registrarAsistencia(asistencia)
      .subscribe(
        response => {
          console.log('Asistencia registrada:', response);
        },
        error => {
          console.error('Error al registrar la asistencia:', error);
        }
      );
  }
}



