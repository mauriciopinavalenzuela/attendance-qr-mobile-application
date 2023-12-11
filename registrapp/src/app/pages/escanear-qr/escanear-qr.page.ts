// escanear-qr.page.ts

import { Component, OnInit } from '@angular/core';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-escanear-qr',
  templateUrl: './escanear-qr.page.html',
  styleUrls: ['./escanear-qr.page.scss'],
})
export class EscanearQrPage implements OnInit {
  isSupported = false;
  barcodes: Barcode[] = [];

  constructor(private alertController: AlertController) {}

  async ngOnInit() {
    await this.checkScannerSupport();
  }

  async checkScannerSupport(): Promise<void> {
    const result = await BarcodeScanner.isSupported();
    this.isSupported = result.supported;

    if (this.isSupported) {
      await this.installGoogleBarcodeScannerModule();
    }
  }

  async scan(): Promise<void> {
    const granted = await this.requestPermissions();
    if (!granted) {
      this.presentAlert();
      return;
    }
    const { barcodes } = await BarcodeScanner.scan();
    this.barcodes.push(...barcodes);
  }

  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }

  async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permisos denegados',
      message: 'Por favor, otorga los permisos a la cámara para utilizar el scanner',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async installGoogleBarcodeScannerModule(): Promise<void> {
    try {
      await BarcodeScanner.installGoogleBarcodeScannerModule();
    } catch (error) {
      console.error('Error installing Google Barcode Scanner module:', error);
    }
  }
}

