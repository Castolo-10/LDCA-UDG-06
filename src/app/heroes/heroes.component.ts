import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit { // la clase se exporta siempre para ser utilizada como si fuera un modulo

  hero: Hero = {
    id: 1,
    name: 'Nasus'
  }

  constructor() { }

  ngOnInit() { // Aqui va logica de inicializacion
  }

}
