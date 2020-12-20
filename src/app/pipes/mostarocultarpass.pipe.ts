import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mostarocultarpass'
})
export class MostarocultarpassPipe implements PipeTransform {

  transform(value: any, estado: boolean): any {

    // Valor es el valor que recibe por defecto, pude ser de api
    // estado, es la variable con la que juego para hacer la 
    //Tranformacion 

    if (estado){
      return value;
    }
    else{
      let conasteriscos = '';

      for (let i = 0; i < value.length; i++) {
      conasteriscos += '*';
      }
      console.log(conasteriscos);
      return value.replace(value, conasteriscos);
    }
  }

}
