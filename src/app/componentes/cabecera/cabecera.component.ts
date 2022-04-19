import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SPeliculasService } from 'src/app/servicios/s-peliculas.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  textoBuscar:string="";
  @Output() eventoBusqueda: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  buscar():void{
    this.eventoBusqueda.emit(this.textoBuscar);
  }


}
