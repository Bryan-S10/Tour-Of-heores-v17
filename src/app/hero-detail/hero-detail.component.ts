import { NgModel,FormsModule } from '@angular/forms';
import { Component , OnInit, Input } from '@angular/core';
import { Hero } from '../hero';



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

  constructor () {}

  ngOnInit(): void {

  }

}
