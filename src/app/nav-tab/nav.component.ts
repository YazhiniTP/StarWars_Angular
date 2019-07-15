import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isRoundButton: true;
  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Characters',
        link: './characters',
        icon: 'people',
        index: 0
      }, {
        label: 'Films',
        link: './films',
        icon: 'movie',
        index: 1
      }, {
        label: 'Species',
        link: './species',
        icon: 'pets',
        index: 2
      }, {
        label: 'Starships',
        link: './starships',
        icon: 'camera',
        index: 3
      }, {
        label: 'Vehicles',
        link: './vehicles',
        icon: 'flight',
        index: 4
      }, {
        label: 'Planets',
        link: './planets',
        icon: 'my_location',
        index: 5
      },
    ];
  }
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

  back() {
    window.history.back();
  }
}
