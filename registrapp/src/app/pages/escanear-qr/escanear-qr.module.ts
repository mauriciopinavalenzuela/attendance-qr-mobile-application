import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscanearQrPageRoutingModule } from './escanear-qr-routing.module';

import { EscanearQrPage } from './escanear-qr.page';

import { NgxScannerQrcodeModule, LOAD_WASM } from 'ngx-scanner-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscanearQrPageRoutingModule,
    NgxScannerQrcodeModule
  ],
  declarations: [EscanearQrPage]
})
export class EscanearQrPageModule {}
