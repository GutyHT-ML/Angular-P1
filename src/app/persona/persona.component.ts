import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  public nombre: String
  public apellido: String
  public edad: Number
  public sexo: String
  public persona: PersonaComponent
  constructor() { }
  set_nombre(nombre:String){
    this.nombre = nombre
  }
  set_apellido(apellido:String){
    this.apellido = apellido
  }
  set_edad(edad:Number){
    this.edad = edad
  }
  set_sexo(sexo:String){
    this.sexo = sexo
  }
}
