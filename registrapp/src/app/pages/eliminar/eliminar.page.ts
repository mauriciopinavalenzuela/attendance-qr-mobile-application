import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCrudService } from 'src/app/servicios/apicrud.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.page.html',
  styleUrls: ['./eliminar.page.scss'],
})
export class EliminarPage implements OnInit {

  usuario={
    id:0,
    nombreCompleto:""
  }
  constructor(private router:Router, 
              private apiCrud: ApiCrudService) { }

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
          nombreCompleto: resp[0].nombreCompleto
        }
      }
    )
  }

  eliminarUsuario(){
    this.apiCrud.EliminarUsuario(this.usuario).subscribe();
    this.router.navigateByUrl("listar");
  }
}