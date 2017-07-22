import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  title = 'app';
=======

  nombre = "Alvaro";
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

>>>>>>> 8338efbe87d0ac9c05e9c26b0f53d0bd79cf16d2
}
