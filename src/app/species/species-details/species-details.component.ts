import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-species-details',
  templateUrl: './species-details.component.html',
  styleUrls: ['./species-details.component.css']
})
export class SpeciesDetailsComponent implements OnInit {

  @Input()
  species

  ngOnInit() {
  }
}