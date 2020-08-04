import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mp-star-wars',
  template: `
    <mp-two-column-layout>
      <mp-character-list left></mp-character-list>
      <router-outlet right></router-outlet>
    </mp-two-column-layout>
  `,
  styles: []
})
export class StarWarsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
