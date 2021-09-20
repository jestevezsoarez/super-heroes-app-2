import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: Heroe;

  constructor( private heroesService: HeroesService,
                private activatedRoute: ActivatedRoute,
                private router: Router ) { 

    this.activatedRoute.params.subscribe( data => {
      this.heroe = this.heroesService.getHeroe(data['id']);
    })
  
  }

  ngOnInit(): void {
  }

  Regresar() {

    this.router.navigate(['heroes']);
  }

}
