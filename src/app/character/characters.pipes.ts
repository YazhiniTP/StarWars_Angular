import { Pipe, PipeTransform} from '@angular/core';

import { CharactersService } from 'src/app/character/characters.service';

@Pipe({ name: 'characterspipe', pure:false}) 

export class CharactersPipe implements PipeTransform {

    private result:string;

    constructor(private characterservice: CharactersService) { }

    transform(param:string) {       
        if(param){
            this.characterservice.getCharacter(param).subscribe(res => {
                this.result= res["name"]
              })
        }
        return this.result;
    }

    /*
    transform() {   
            this.characterservice.getData().subscribe(res => {
                this.result= res["name"]
              })
        return this.result;
    }
    */
}
