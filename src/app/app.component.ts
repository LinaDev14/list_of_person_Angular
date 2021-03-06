import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'listado de personas';
  personas: Persona[] = [
    new Persona('Lina', 'Guerrero'),
    new Persona('Santiago', 'Vlad'),
    new Persona('Mateo', 'Vlad')
  ];


  personaAgregada(persona: Persona){
    this.personas.push(persona);
  }

}
