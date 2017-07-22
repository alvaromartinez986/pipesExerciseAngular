import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre = "Alvaro";
  nombreDos = "alvaro steVen marTInez sanchez";

  title = 'app';
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  percentNumber = 0.234;
  salario = 1234.5;
  heroe = {
    nombre : 'Logan',
    clave : 'Wolverine',
    edad: 500,
    direccion : {
      calle: "Primera",
      casa: '32'
    }
  };

  valorPromesa = new Promise((resolve, reject)=>{

    setTimeout(()=>resolve('llego la data'), 3500);

  });

  fecha = new  Date();

  video = "CNx9Jvap16w?ecver=2";
  impresionContr = "ejemplo";
  activar :boolean = true;
}
