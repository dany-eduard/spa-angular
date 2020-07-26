import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
})
export class ResultsComponent implements OnInit {
  @Input() heroes: any = [];
  termino: string;

  constructor(
    private acivatedRoute: ActivatedRoute,
    private router: Router,
    private _heroesService: HeroesService
  ) {
    this.acivatedRoute.params.subscribe((params) => {
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      this.termino = params['termino'];
    });
  }

  ngOnInit(): void {}
}
