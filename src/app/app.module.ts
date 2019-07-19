import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NavComponent } from './nav-tab/nav.component';

import { CharactersService } from './character/characters.service';
import { FilmsService } from './film/films.service';
import { SpeciesService } from './species/species.service';
import { StarshipsService } from './starship/starships.service';
import { VehiclesService } from './vehicle/vehicles.service';
import { PlanetsService } from './planet/planets.service';

import { CharactersPipe } from './character/characters.pipes';
import { SpeciesPipe } from './species/species.pipes';
import { StarshipsPipe } from './starship/starships.pipes';
import { VehiclesPipe } from './vehicle/vehicles.pipes';
import { PlantesPipe } from './planet/planets.pipes';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavComponent,
    CharactersPipe,
    SpeciesPipe,
    StarshipsPipe,
    VehiclesPipe,
    PlantesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CharactersService, FilmsService, SpeciesService, StarshipsService, VehiclesService, PlanetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
