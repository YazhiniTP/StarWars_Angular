import { Component, OnInit, Input } from '@angular/core';
import { FilmsService } from 'src/app/film/films.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  private next: string;
  private prev: string;

  @Input()
  allFilms
  selectedFilm
  film
  show: boolean = true;
  hide: boolean = true;

  constructor(private filmservice: FilmsService) { }

  ngOnInit() {
    this.filmservice.getAll().subscribe(x => {
      this.next = x['next'];
      this.prev = x['previous'];
      this.allFilms = x['results']
    });
  }

  select(film) {
    this.selectedFilm = film;
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
      this.filmservice.getFilm(this.next).subscribe(x => {
        this.next = x['next'];
        this.prev = x['previous'];
        this.allFilms = x['results']
      })
    }
  }

  goPrev() {
    if (this.prev) {
      this.filmservice.getFilm(this.prev).subscribe(x => {
        this.next = x['next'];
        this.prev = x['previous'];
        this.allFilms = x['results']
      })
    }
  }

}