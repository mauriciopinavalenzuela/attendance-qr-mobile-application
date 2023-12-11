import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private HttpClient:HttpClient) { }

  getTopHeadLines(){
    return this.HttpClient.get<RespuestaTopHeadlines>('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=fc7d9914898440dbbd18848dcadd6851');
  }
}
