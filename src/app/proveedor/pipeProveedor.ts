import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe2 implements PipeTransform {

  transform(value: any[], arg: string): any {
    if (!value){
      return [];
    }
    if (!arg){
      return value
    }
    arg = arg.toLocaleLowerCase();
    return value.filter(it =>{
      return it.nombre.toLocaleLowerCase().includes(arg)
    })
  }

}
