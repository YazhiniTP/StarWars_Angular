import { Component, OnInit, Input } from '@angular/core';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  private next: string;
  private prev: string;

  @Input()
  allVehicles
  selectedVehicle
  vehicle
  show: boolean = true;
  hide: boolean = true;

  constructor(private vehicleservice: VehiclesService) { }

  ngOnInit() {
    this.vehicleservice.getAll().subscribe(x => {
      this.next = x['next'];
      this.prev = x['previous'];
      this.allVehicles = x['results']
    });
  }

  select(vehicle) {
    this.selectedVehicle = vehicle;
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
      this.vehicleservice.getVehicle(this.next).subscribe(x => {
        this.next = x['next'];
        this.prev = x['previous'];
        this.allVehicles = x['results']
      })
    }
  }

  goPrev() {
    if (this.prev) {
      this.vehicleservice.getVehicle(this.prev).subscribe(x => {
        this.next = x['next'];
        this.prev = x['previous'];
        this.allVehicles = x['results']
      })
    }
  }
}