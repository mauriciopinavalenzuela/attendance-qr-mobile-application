import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCrudService } from 'src/app/servicios/apicrud.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  usuario ={
    id:0,
    nombreCompleto:"",
    role:"",
    email:""
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
          email: resp[0].email
        }
      }
    )
  }


}
