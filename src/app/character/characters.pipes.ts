import { Pipe, PipeTransform } from '@angular/core';
import { CharactersService } from './characters.service';
import { HttpClient } from "@angular/common/http";

@Pipe({ name: 'characterspipe', pure: false })

export class CharactersPipe implements PipeTransform {

    private result: string;

    constructor(private characterservice: CharactersService) { }

    transform(param: string) {
        if (param) {
            this.characterservice.getCharacter(param).subscribe(res => {
                //console.log(res["name"]);
                this.result = res["name"]
            })
        }
        return this.result;
    }
    
    /*
    private apiData: any = null;
    private apiUrl = '';
    constructor(private httpclient: HttpClient) { }

    transform(url: string): any {
        console.log("pipe called"+ this.apiData)

        if (url !== this.apiUrl) {
            console.log("server called")
            this.apiData = null;
            this.apiUrl = url;

            this.httpclient.get(url).subscribe(result => this.apiData = result);
        }
        return this.apiData;
    }
    */
}