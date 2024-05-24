import { NgModel,FormsModule } from '@angular/forms';
import { Component , OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})



export class HeroDetailComponent implements OnInit{
  @Input()
  hero!: Hero;

  constructor (
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
  getHero(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.heroService.getHero(+id).subscribe(hero => this.hero = hero);
    } else {
      console.error('No ID found in route parameters');
    }
  }

  goBack(): void {
    this.location.back();
  }


}
