import { Component, OnInit, Input } from '@angular/core';
import { StarshipsService } from '../starships.service';

@Component({
  selector: 'app-starship-list',
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.css']
})
export class StarshipListComponent implements OnInit {
  private next: string;
  private prev: string;

  @Input()
  allStarships
  selectedStarship
  starship
  show: boolean = true;
  hide: boolean = true;

  constructor(private starshipservice: StarshipsService) { }

  ngOnInit() {
    this.starshipservice.getAll().subscribe(x => {
      this.next = x['next'];
      this.prev = x['previous'];
      this.allStarships = x['results']
    });
  }

  select(starship) {
    this.selectedStarship = starship;
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
      this.starshipservice.getStarship(this.next).subscribe(x => {
        this.next = x['next'];
        this.prev = x['previous'];
        this.allStarships = x['results']
      })
    }
  }
  goPrev() {
    if (this.prev) {
      this.starshipservice.getStarship(this.prev).subscribe(x => {
        this.next = x['next'];
        this.prev = x['previous'];
        this.allStarships = x['results']
      })
    }
  }

}