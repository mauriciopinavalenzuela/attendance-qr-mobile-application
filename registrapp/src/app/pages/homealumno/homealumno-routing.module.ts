import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomealumnoPage } from './homealumno.page';

const routes: Routes = [
  {
    path: '',
    component: HomealumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomealumnoPageRoutingModule {}
