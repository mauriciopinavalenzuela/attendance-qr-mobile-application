import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/servicios/noticias.service';
import { Article } from '../interfaces/interfaces';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  articulos: Article[] = [];

  constructor(private noticiasService: NoticiasService, private menuCtrl: MenuController) { }

  ngOnInit() {
    this.noticiasService.getTopHeadLines().subscribe(resp =>{
      console.log(resp);
      this.articulos.push(...resp.articles);
    });
  }

  mostrarMenu(){
    this.menuCtrl.enable(true, 'first');
    this.menuCtrl.open('first');
  }

}
