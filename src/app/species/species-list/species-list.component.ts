import { Component, OnInit, Input } from '@angular/core';
import { SpeciesService } from '../species.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.css']
})
export class SpeciesListComponent implements OnInit {
  private next: string;
  private prev: string;
  swAPI$: Observable<any>;

  @Input()
  allSpecies
  selectedSpecies
  species
  films
  show: boolean = true;
  hide: boolean = true;

  constructor(private speciesservice: SpeciesService) { }

  
  ngOnInit() {
    this.speciesservice.getAll().subscribe(x => {
      this.next = x['next'];
      this.prev = x['previous'];
      this.allSpecies = x['results']
    });
  }
  
 
  /*
  ngOnInit() {
    this.swAPI$ = this.speciesservice.getSpecie();
  }
*/


  select(species) {
    this.selectedSpecies = species;
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
      this.speciesservice.getSpecies(this.next).subscribe(x => {
        this.next = x['next'];
        this.prev = x['previous'];
        this.allSpecies = x['results']
      })
    }
  }
  goPrev() {
    if (this.prev) {
      this.speciesservice.getSpecies(this.prev).subscribe(x => {
        this.next = x['next'];
        this.prev = x['previous'];
        this.allSpecies = x['results']
      })
    }
  }

}