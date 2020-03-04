import { Injectable, PipeTransform, Pipe } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Pipe({name: 'double'})
export class CustompipeService implements PipeTransform {

  transform(value) {
    let rtnval = value*2
   
    return rtnval;
  }
}
