import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http';
import { RespuestaToHeadLines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getTopHeadLines()
  {
    return this.http.get<RespuestaToHeadLines>('https://newsapi.org/v2/everything?q=tesla&from=2021-10-02&sortBy=publishedAt&apiKey=e236e759822e44ae9dcdd04d31f818f4');
  }


  

}
