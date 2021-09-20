import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() item;
  @Input() i;

  @Output() heroeSeleccionado;

  constructor( private router: Router ) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  // verHeroe(i) {
  //   this.router.navigate(['heroe', i]);
  // }

  onHeroeSeleccionado() {    
    this.heroeSeleccionado.emit(this.i);
  }


}
