import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit { // la clase se exporta siempre para ser utilizada como si fuera un modulo

  heroes = HEROES;

  selectedHero: Hero;
  onSelect(hero:Hero): void{
    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit() { // Aqui va logica de inicializacion
  }

}
