import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css']
})
export class PlanetDetailsComponent implements OnInit {

  @Input()
  planet

  ngOnInit() {
  }
}