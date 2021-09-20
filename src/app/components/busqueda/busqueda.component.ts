import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  heroesBuscados: Heroe[] = [];
  termino: string = '';

  constructor( private activatedRoute: ActivatedRoute,
                private heroesService: HeroesService,
                private router: Router ) { 

    this.activatedRoute.params.subscribe( data => {

      this.termino = data['termino'];
      this.heroesBuscados = this.heroesService.buscarHeroes(this.termino);
      //console.log(this.heroesBuscados);
      
    })
  }

  ngOnInit(): void {
  }

  verHeroe(i: number) {       
    this.router.navigate(['heroe', i]);
  }

  
}
