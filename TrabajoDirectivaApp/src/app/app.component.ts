import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de usuarios';
  mensaje ="";
  registrado = false;
  nombre ="";
  apellido ="";
  entradas: object[];
  

  constructor(){
    this.entradas=[
      {titulo:"Python cada día más presente"},
      {titulo:"Java cada día más presente"},
      {titulo:"JavaScript cada día más presente"},
      {titulo:"Kotlin cada día más presente"},
      {titulo:"Dónde quedó Pascal"},
    ]

  }

  registarUsuario(){
    this.registrado = true
    this.mensaje="usuario registrado"

  }
}
