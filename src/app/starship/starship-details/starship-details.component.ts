import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.css']
})
export class StarshipDetailsComponent implements OnInit {

  @Input()
  starship

  ngOnInit() {
  }
}