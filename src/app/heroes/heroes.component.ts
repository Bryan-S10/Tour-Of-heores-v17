import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HEROES } from "../mock-heroes";
import { NgFor } from '@angular/common';
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";
@Component({
    selector: 'app-heroes',
    standalone: true,
    templateUrl: './heroes.component.html',
    styleUrl: './heroes.component.css',
    imports: [FormsModule, HeroDetailComponent]
})

export class HeroesComponent implements OnInit {

  hero!: Hero;
  heroes = HEROES;
  selectedHero!: Hero;

  constructor() {

  }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;

    // window.alert(`Selected Hero: ${hero.name}`);
    console.log("asdasdas");
  }

}

