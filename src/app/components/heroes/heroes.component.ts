import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[];


  constructor( private heroesService: HeroesService,
                private router: Router ) {

    this.heroes = this.heroesService.getHeroes();
    // console.log(this.heroes);
    
   }

  ngOnInit(): void {

  }

  verHeroe( i: number ) {
    
    this.router.navigate(['heroe/', i]);   
  }

}
