import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable()
export class VehiclesService {
  private apiUrl = "https://swapi.co/api/vehicles";

  constructor(private httpclient: HttpClient) { }

  getAll() {
    return this.httpclient.get(this.apiUrl).pipe(map(response => response));
  }

  getVehicle(param: string) {
    const url = param + "";
    return this.httpclient.get(url).pipe(map(
      (res: Response) => { return res; }
    ));
  }
}