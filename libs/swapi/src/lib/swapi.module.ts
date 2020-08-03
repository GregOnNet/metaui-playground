import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterApi } from './character-api.service';

@NgModule({
  imports: [CommonModule],
  providers: [CharacterApi]
})
export class SwapiModule {}
