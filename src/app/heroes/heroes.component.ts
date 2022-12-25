import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'アイアンマン'
  };
  // mock-herosで定義したモックデータを取得する
  heroes = HEROES;

  selectedHero?: Hero;
  //heroボタンが押された時、呼び出される関数
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
