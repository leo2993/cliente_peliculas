import { EventEmitter, Injectable, Output } from '@angular/core';
import { Pelicula } from '../models/pelicula.model';

@Injectable({
  providedIn: 'root'
})
export class SDetallePeliculaService {
  @Output() modificadorDetalleEvent: EventEmitter<Pelicula>;
  pelicula:Pelicula;
  constructor() { 
    this.modificadorDetalleEvent = new EventEmitter<Pelicula>();
  }

  setPelicula(pelicula:Pelicula){
    this.pelicula = pelicula;
    this.modificadorDetalleEvent.emit(this.pelicula);
  }
}
