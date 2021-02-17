import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeliculasListComponent } from './component/peliculas-list/peliculas-list.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { SeriesListComponent } from './component/series-list/series-list.component';

const routes: Routes = [
  {path: '', component: PrincipalComponent}, //pagina principal localhost:4200
  {path:'peliculasList', component: PeliculasListComponent},
  {path:'seriesList', component: SeriesListComponent},
  {path:'**', pathMatch: 'full', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
