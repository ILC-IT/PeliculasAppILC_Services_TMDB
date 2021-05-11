import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeliculaComponent } from './component/pelicula/pelicula.component';
import { SerieComponent } from './component/serie/serie.component';
import { PeliculasListComponent } from './component/peliculas-list/peliculas-list.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { SeriesListComponent } from './component/series-list/series-list.component';
import { BuscadorComponent } from './component/buscador/buscador.component';
import { RegistroTemplateComponent } from './component/registro-template/registro-template.component';
import { RegistroReactivoComponent } from './component/registro-reactivo/registro-reactivo.component';
import { RegistroComfirmarComponent } from './component/registro-comfirmar/registro-comfirmar.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {path: '', component: PrincipalComponent}, //pagina principal localhost:4200
  {path:'peliculasList', component: PeliculasListComponent},
  {path:'seriesList', component: SeriesListComponent},
  {path: 'pelicula', component: PeliculaComponent},
  {path: 'serie', component: SerieComponent},
  {path: 'buscar/:query', component: BuscadorComponent},
  {path: 'registro', component: RegistroTemplateComponent},
  {path: 'registroreactivo', component: RegistroReactivoComponent},
  {path: 'registroconfirmar', component: RegistroComfirmarComponent},
  {path: 'login', component: LoginComponent},
  {path:'**', pathMatch: 'full', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
