import { Pipe, PipeTransform} from '@angular/core';
import { SpeciesService } from './species.service';

@Pipe({ name: 'speciespipe', pure:false}) 

export class SpeciesPipe implements PipeTransform {

    private result:string;

    constructor(private speciesservice: SpeciesService) { }

    transform(param:string) {       
        if(param){
            this.speciesservice.getSpecies(param).subscribe(res => {
                this.result= res["name"]
              })
        }
        return this.result;
    }

}
