import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'celsiusConverter'})
export class CelsiusConverter implements PipeTransform {
	transform(value: number):any {
		if(value){
			let celTemp = value - 273.15;
			let wholeTemp = Math.round(celTemp);
			return wholeTemp;
		}
	}
}