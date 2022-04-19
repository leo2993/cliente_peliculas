import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { PieComponent } from './componentes/pie/pie.component';
import { ListadoPeliculasComponent } from './componentes/listado-peliculas/listado-peliculas.component';
import { PeliculaComponent } from './componentes/pelicula/pelicula.component';
import { HttpClientModule } from '@angular/common/http';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';
import { SafePipe } from './safe.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent,
    ListadoPeliculasComponent,
    PeliculaComponent,
    DetallePeliculaComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
