import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean = true): any {
    let result = value;
    if(activar){
      result = Array(value.length).join('*');
    }
    return result;
  }

}
