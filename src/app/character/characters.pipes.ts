import { Pipe, PipeTransform } from '@angular/core';

import { CharactersService } from './characters.service';

@Pipe({ name: 'characterspipe', pure: false})

export class CharactersPipe implements PipeTransform {

    private result: string;

    constructor(private characterservice: CharactersService) { }

    transform(param: string) {
        if (param) {
            this.characterservice.getCharacter(param).subscribe(res => {
                console.log(res)
                this.result = res["name"]             
            })
        }
        return this.result;
    }
}