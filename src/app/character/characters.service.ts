import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable()
export class CharactersService {
  private apiUrl = "https://swapi.co/api/people";

  constructor(private httpclient: HttpClient) { }

  getAll() {
    return this.httpclient.get(this.apiUrl).pipe(map(response => response));
  }

  getCharacter(param: string) {
    const url = param + "";
    return this.httpclient.get(url).pipe(map(
      (res: Response) => { return res; }
    ));
  }
}