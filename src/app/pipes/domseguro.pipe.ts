import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// Ese dDomsanatizer no se que haga

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {1

  constructor(private domsanatizar: DomSanitizer){}

  // Cuando se crea un PIPE se crea este metodo por defecto


  transform(value: string, url: string): any {

    return this.domsanatizar.bypassSecurityTrustResourceUrl(url + value);
    //Devulve algo de domSanitizer
  }

}


