import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'fahrenheitConverter'})
export class FahrenheitConverter implements PipeTransform {
	transform(value: number):any {
		if(value){
			let fahTemp = ((value - 273.15) * 1.8) + 32;
			let wholeTemp = Math.round(fahTemp);
			return wholeTemp;
		}
	}
}