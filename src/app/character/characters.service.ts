import { Injectable, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, mergeMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';

@Injectable()
export class CharactersService {
  private apiUrl = "https://swapi.co/api/people";
  private result:string;

  constructor(private httpclient: HttpClient) { }

  getAll() {
    return this.httpclient.get(this.apiUrl).pipe(map(response => response));
  }

  getCharacter(param:string) {
    const url = param+"";
    return this.httpclient.get(url).pipe(map(
      (res: Response) => {return res;}
    ));
  }

  /*
  getFilms() {
    return this.getCharacter(this.getFilms()).subscribe(res => {
      this.result= res["name"]
    })
  }

  
  
  getCharacter(url) {
    return this.httpclient.get(url).pipe(map(response => response));
  }
  */
 
  /*
  getData() {
    return this.httpclient.get(this.apiUrl)
    .pipe(
      mergeMap((character: any) => {
        return forkJoin(
          this.httpclient.get(character.species),
          forkJoin(
            character.homeworld.map(type =>  {
              return this.httpclient.get(type)
            })
          ),
          forkJoin(
            character.film.map(type =>  {
              return this.httpclient.get(type)
            })
          ),
          forkJoin(
            character.vehicles.map(type =>  {
              return this.httpclient.get(type)
            })
          )
        ).pipe(
          map(d => {
            return {
              character: character,
              species: d[0],
              homeworld: d[1],
              film: d[2],
              vehicles: d[3]
            }
          })
        )
      }       
      )
    )
  }
 */

}


