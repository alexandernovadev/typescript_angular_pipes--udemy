import { Component } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  nombre = 'Alexander';
  arreglo = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9];

  // In colombia only server integer numbers
  numero = 2200 ;

  // but for percent only server decimal numbers
  porcentaje = 1.0;

  object: Object = {nombre: 'alexander', edad: '24', habilidad: {progr: 3, numbers: [1, 2, 3, 4, 5]}};

  promesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve('Llego la data')},2000)
  });

  // Se va a utilizar Pipe Fecha español
  //HAY QUE AGREGAR MODULOS AL NGMODULE
  today: number = Date.now();


  //Dato no seguro para angular

  variable = 'sieeAV3Utxc';

  nombreee = 'Alexander';
  activar = true;

}
