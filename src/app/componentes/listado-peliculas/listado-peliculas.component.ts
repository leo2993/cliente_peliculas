import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula.model';
import { SPeliculasService } from 'src/app/servicios/s-peliculas.service';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {
  @Input() cadenaABuscar:string="";
  peliculasAll:Pelicula[] = new Array<Pelicula>();
  peliculas:Pelicula[] = new Array<Pelicula>();
  constructor(private servicioPeliculas:SPeliculasService) {}

  ngOnInit(): void {
    this.servicioPeliculas.getPeliculas().subscribe(
      peliculas => {
        console.log("Obteniendo Peliculas...");
        console.log(peliculas);
        this.peliculas=peliculas;
        this.peliculasAll=peliculas;
      }
    )
  }

  ngOnChanges():void {
    console.log("Buscando en ListadoPeliculasComponent:" + this.cadenaABuscar);
    this.peliculas = this.peliculasAll.filter(pelicula => pelicula.titulo.toUpperCase().includes(this.cadenaABuscar.toUpperCase()));
  }

  gestionarPelicula(pelicula:any){
    console.log("Gestionando película en ListadoPeliculas:" + pelicula);
  }
}
