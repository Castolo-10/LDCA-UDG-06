import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Miss Fortune' },
      { id: 12, name: 'Braum' },
      { id: 13, name: 'Thresh' },
      { id: 14, name: 'Wukong' },
      { id: 15, name: 'Lee Sin' },
      { id: 16, name: 'Zac' },
      { id: 17, name: 'Sejuani' },
      { id: 18, name: 'Warwick' },
      { id: 19, name: 'Janna' },
      { id: 20, name: 'Jax' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
