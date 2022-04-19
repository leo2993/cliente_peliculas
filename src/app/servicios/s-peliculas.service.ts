import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SPeliculasService {
  peliculas:Observable<Pelicula[]>=new Observable();
  constructor(private clienteHttp:HttpClient) {}
  getPeliculas(): Observable<Pelicula[]> {
    console.log("Obteniendo peliculas de la BBDD (WS)");
    this.peliculas=this.clienteHttp.get<Pelicula[]>("http://localhost/peliculas");
    return this.peliculas;
  }
}
