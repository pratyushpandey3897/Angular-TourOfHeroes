import { Injectable } from '@angular/core';
import { Hero } from './hero'; // interface
import { HEROES } from './mock-heroes';  //data
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { } // service in service scenario, messageservice in hero service
  getHeroes(): Observable<Hero[]> { // observable for async calls
    const heroes = of(HEROES);
    this.messageService.add("Heroes Fetched by Hero Service");
    return heroes;
  }

  getHero(id: number): Observable<Hero> { //You can rewrite getHero() as a real Http request without having to change the HeroDetailComponent that calls it.
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
