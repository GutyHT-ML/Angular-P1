import { Component } from '@angular/core';
import { PersonaComponent } from './persona/persona.component'

@Component({
  selector: 'app-root',
  templateUrl: './persona/persona.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  persona:PersonaComponent = new PersonaComponent()
  constructor(){
    this.persona.set_nombre('Gustavo')
    this.persona.set_edad(19)
    this.persona.set_apellido('Hernandez')
    this.persona.set_sexo('Male')
  }
}
