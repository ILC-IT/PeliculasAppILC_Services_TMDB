import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { PrincipalComponent } from './component/principal/principal.component';
import { PeliculasListComponent } from './component/peliculas-list/peliculas-list.component';
import { SeriesListComponent } from './component/series-list/series-list.component';
import { PeliculaComponent } from './component/pelicula/pelicula.component';
import { PeliculasService } from "./services/peliculas.service";
import { SeriesService } from "./services/series.service";
import { SerieComponent } from './component/serie/serie.component';
import { HttpClientModule } from '@angular/common/http';
import { PuntuacionComponent } from './component/puntuacion/puntuacion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PrincipalComponent,
    PeliculasListComponent,
    SeriesListComponent,
    PeliculaComponent,
    SerieComponent,
    PuntuacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    PeliculasService,
    SeriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
