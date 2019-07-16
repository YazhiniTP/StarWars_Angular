import { Pipe, PipeTransform } from '@angular/core';
import { PlanetsService } from './planets.service';

@Pipe({ name: 'planetspipe', pure: false })

export class PlantesPipe implements PipeTransform {

    private result: string;

    constructor(private planetservice: PlanetsService) { }

    transform(param: string) {
        if (param) {
            this.planetservice.getPlanet(param).subscribe(res => {
                this.result = res["name"]
            })
        }
        return this.result;
    }
}