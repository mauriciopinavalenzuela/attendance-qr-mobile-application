import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCrudService } from 'src/app/servicios/apicrud.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-private',
  templateUrl: './private.page.html',
  styleUrls: ['./private.page.scss'],
})
export class PrivatePage implements OnInit {

  usuario ={
    id:0,
    nombreCompleto:"",
    role:"",
    email:"",
    password:"0"
  }

  constructor(private apiCrud: ApiCrudService, private router: Router) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.getUsuarioById(this.getIdFromUrl());
  }

  getIdFromUrl(){
    let url=this.router.url;
    let arr=url.split("/",3);
    let id = parseInt(arr[2]);
    return id;
  }

  getUsuarioById(usuarioID:number){
    this.apiCrud.BuscarUsuarioPorId(usuarioID).subscribe(
      (resp:any)=>{                 //resp llega en formato de arreglo de un objeto 
        this.usuario={
          id: resp[0].id,
          nombreCompleto: resp[0].nombreCompleto,
          role: resp[0].role,
          email: resp[0].email,
          password: resp[0].password
        }
      }
    )
  }


}

