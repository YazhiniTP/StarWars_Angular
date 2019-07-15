import { Component, OnInit, Input } from '@angular/core';
import { PlanetsService } from '../planets.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {
  private next: string;
  private prev: string;

  @Input()
  allPlanets
  selectedPlanet
  planet
  show: boolean = true;
  hide: boolean = true;

  constructor(private planetservice: PlanetsService) { }

  ngOnInit() {
    this.planetservice.getAll().subscribe(x => {
      this.next = x['next'];
      this.prev = x['previous'];
      this.allPlanets = x['results']
    });
  }

  select(planet) {
    this.selectedPlanet = planet;
  }

  toggleShow() {
    this.show = !this.show;
    this.hide = true;
  }

  toggleHide() {
    this.hide = !this.hide;
    this.show = true;
  }

  goNext() {
    if (this.next) {
      this.planetservice.getPlanet(this.next).subscribe(x => {
        this.next = x['next'];
        this.prev = x['previous'];
        this.allPlanets = x['results']
      })
    }
  }
  goPrev() {
    if (this.prev) {
      this.planetservice.getPlanet(this.prev).subscribe(x => {
        this.next = x['next'];
        this.prev = x['previous'];
        this.allPlanets = x['results']
      })
    }
  }
}