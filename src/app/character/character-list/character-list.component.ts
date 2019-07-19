import { Component, OnInit, Input } from '@angular/core';
import { CharactersService } from 'src/app/character/characters.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  private next: string;
  private prev: string;

  @Input()
  allCharacters
  selectedCharacter
  character
  show: boolean = true;
  hide: boolean = false;

  constructor(private characterservice: CharactersService) { }

  ngOnInit() {
    this.characterservice.getAll().subscribe(x => {
      this.next = x['next'];
      this.prev = x['previous'];
      this.allCharacters = x['results']
    });
  }

  select(character) {
    this.selectedCharacter = character;
  }

  toggleShow() {
    this.show = !this.show;
    this.hide = !this.hide;
  }

  toggleHide() {
    this.hide = !this.hide;
    this.show = !this.show;
  }

  goNext() {
    if (this.next) {
      this.characterservice.getCharacter(this.next).subscribe(x => {
        this.next = x['next'];
        this.prev = x['previous'];
        this.allCharacters = x['results']
      })
    }
  }
  
  goPrev() {
    if (this.prev) {
      this.characterservice.getCharacter(this.prev).subscribe(x => {
        this.next = x['next'];
        this.prev = x['previous'];
        this.allCharacters = x['results']
      })
    }
  }
}
