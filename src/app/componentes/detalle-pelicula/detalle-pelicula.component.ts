import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula.model';
import { SDetallePeliculaService } from 'src/app/servicios/s-detalle-pelicula.service';

const TEMPORIZADOR:number = 1000;

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {
  
  pelicula:Pelicula;
  
  constructor(private detalleService:SDetallePeliculaService) { 
  }

  ngOnInit(): void {
    this.detalleService.modificadorDetalleEvent.subscribe((pelicula) => {
      this.pelicula = pelicula;
      /*let self=this;
      setTimeout(() => {
        self.limpiar();
      },TEMPORIZADOR);*/
    });
  }
  limpiar():void{
    this.detalleService.setPelicula(null);
  }
}
