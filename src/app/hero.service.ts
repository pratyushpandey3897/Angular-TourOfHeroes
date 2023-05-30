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
}