import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomealumnoPageRoutingModule } from './homealumno-routing.module';

import { HomealumnoPage } from './homealumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomealumnoPageRoutingModule
  ],
  declarations: [HomealumnoPage]
})
export class HomealumnoPageModule {}
