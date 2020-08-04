import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mp-star-wars',
  template: `
    <mp-two-column-layout>
      <mp-character-card-list left></mp-character-card-list>
      <router-outlet right></router-outlet>
    </mp-two-column-layout>
  `,
  styles: [],
})
export class StarWarsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
