import { Pipe, PipeTransform } from '@angular/core';
import { StarshipsService } from './starships.service';

@Pipe({ name: 'starshipspipe', pure: false })

export class StarshipsPipe implements PipeTransform {

    private result: string;

    constructor(private starshipservice: StarshipsService) { }

    transform(param: string) {
        if (param) {
            this.starshipservice.getStarship(param).subscribe(res => {
                this.result = res["name"]
            })
        }
        return this.result;
    }
}
