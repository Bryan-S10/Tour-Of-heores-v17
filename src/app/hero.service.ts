import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    const hero = HEROES.find(hero => hero.id === id);
    if (hero) {
      return of(hero);
    } else {
      // Manejo de error o valor por defecto
      this.messageService.add(`HeroService: hero id=${id} not found`);
      return of({ id: 0, name: 'Unknown Hero' } as Hero);  // Devuelve un héroe por defecto
    }
  }

  constructor(private messageService: MessageService) { }
}
