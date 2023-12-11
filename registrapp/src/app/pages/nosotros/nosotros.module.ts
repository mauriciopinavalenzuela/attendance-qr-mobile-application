import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NosotrosPageRoutingModule } from './nosotros-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NosotrosPage } from './nosotros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NosotrosPageRoutingModule
  ],
  declarations: [NosotrosPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NosotrosPageModule {}
