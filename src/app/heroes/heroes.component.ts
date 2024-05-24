import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { FormsModule } from '@angular/forms';

import { NgFor } from '@angular/common';
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";
import { MessageService } from '../message.service';
@Component({
    selector: 'app-heroes',
    standalone: true,
    templateUrl: './heroes.component.html',
    styleUrl: './heroes.component.css',
    imports: [FormsModule, HeroDetailComponent]
})

export class HeroesComponent implements OnInit {

   hero!: Hero;
  heroes! : Hero[] ;
  selectedHero!: Hero;

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  constructor(private heroService: HeroService, private messageService: MessageService) {

  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);

    // window.alert(`Selected Hero: ${hero.name}`);
    console.log("asdasdas");
  }

}

