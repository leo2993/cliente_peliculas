import { Component, Input } from '@angular/core';
import { Pelicula } from './models/pelicula.model';
import { SafePipe } from './safe.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textoABuscar:string = "";
  title = 'AngularPeliculas';

  peliculaSeleccionada:Pelicula = new Pelicula(0, "", "", 0, 0, "", "", "");
  declarations: [SafePipe];
  constructor(){
  }

  buscar(textoABuscar:any):void{
    console.log("Buscando en app.component.ts:" + textoABuscar);
    this.textoABuscar=textoABuscar;
  }

}
