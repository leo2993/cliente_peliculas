import { Component } from '@angular/core';
import { Pelicula } from './models/pelicula.model';
import { SafePipe } from './safe.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPeliculas';

  peliculaSeleccionada:Pelicula = new Pelicula(0, "", "", 0, 0, "", "", "");
  declarations: [SafePipe];
  constructor(){

  }

  recibirSelPeli($event){
    console.log('Hola');
    console.log($event.titulo)
  }
}
