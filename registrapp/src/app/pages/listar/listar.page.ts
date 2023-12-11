import { Component, OnInit } from '@angular/core';
import { ApiCrudService } from 'src/app/servicios/apicrud.service';
import { LoadingController } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Users } from '../interfaces/interfaces';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage {

  usuario:Users[]=[];

  constructor(private apiService: ApiCrudService, private loadingCtrl: LoadingController) { }

  ionViewWillEnter(){
    this.loadUsuarios();
    }

    

  async loadUsuarios(event?: InfiniteScrollCustomEvent){
    
      const loading = await this.loadingCtrl.create({
        message: "Cargando..",
        spinner: "bubbles"
      });
      await loading.present();
  
  
      this.apiService.listarUsuarios().subscribe(
        {
          next: resp=>{
            console.log(resp);
           loading.dismiss();
            let listString = JSON.stringify(resp)
            this.usuario=JSON.parse(listString)
            event?.target.complete();
            console.log(this.usuario);
            
          },
          error: err =>{
            console.log(err.error.message);
           loading.dismiss();
          }
        }
      ) 
    }
}
