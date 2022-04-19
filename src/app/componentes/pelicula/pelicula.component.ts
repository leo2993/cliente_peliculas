import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula.model';
import { SDetallePeliculaService } from 'src/app/servicios/s-detalle-pelicula.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  @Output() peliSeleccionada=new EventEmitter<Pelicula>();
  
  @Input() pelicula:Pelicula = new Pelicula(0, "","", 2006, 0, "", "", "");
  constructor(private servicioDetalle:SDetallePeliculaService) { }

  ngOnInit(): void {
  }

  enviarPeliSeleccionada(peli){
    this.servicioDetalle.setPelicula(peli);
  }

  scroll(id) {
    console.log(`scrolling to ${id}`);
    let el = document.getElementById(id);
    console.log(el);
    el.scrollIntoView({behavior: 'smooth'});
  }
}
