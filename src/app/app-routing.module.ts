import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CharacterListComponent } from './character/character-list/character-list.component';
import { CharacterDetailsComponent } from './character/character-details/character-details.component';

import { FilmListComponent } from './film/film-list/film-list.component';
import { FilmDetailsComponent } from './film/film-details/film-details.component';

import { SpeciesListComponent } from './species/species-list/species-list.component';
import { SpeciesDetailsComponent } from './species/species-details/species-details.component';

import { StarshipListComponent } from './starship/starship-list/starship-list.component';
import { StarshipDetailsComponent } from './starship/starship-details/starship-details.component';

import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list.component';
import { VehicleDetailsComponent } from './vehicle/vehicle-details/vehicle-details.component';

import { PlanetListComponent } from './planet/planet-list/planet-list.component';
import { PlanetDetailsComponent } from './planet/planet-details/planet-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: 'characters', component: CharacterListComponent },
  { path: 'films', component: FilmListComponent },
  { path: 'species', component: SpeciesListComponent },
  { path: 'starships', component: StarshipListComponent },
  { path: 'vehicles', component: VehicleListComponent },
  { path: 'planets', component: PlanetListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

export const routingComponents = [CharacterListComponent, CharacterDetailsComponent,
  FilmListComponent, FilmDetailsComponent,
  SpeciesListComponent, SpeciesDetailsComponent,
  StarshipListComponent, StarshipDetailsComponent,
  VehicleListComponent, VehicleDetailsComponent,
  PlanetListComponent, PlanetDetailsComponent
]
