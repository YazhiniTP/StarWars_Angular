import { Pipe, PipeTransform } from '@angular/core';
import { VehiclesService } from './vehicles.service';

@Pipe({ name: 'vehiclespipe', pure: false })

export class VehiclesPipe implements PipeTransform {

    private result: string;

    constructor(private vehicleservice: VehiclesService) { }

    transform(param: string) {
        if (param) {
            this.vehicleservice.getVehicle(param).subscribe(res => {
                console.log(res);
                this.result = res["name"]
            })
        }
        return this.result;
    }
}