import { Injectable } from '@angular/core';
import { Character } from './character';
import { defer, Observable, of } from 'rxjs';
import { characterMocks } from './character.mock';

@Injectable({ providedIn: 'root' })
export class CharacterApi {

  fetchAll(): Observable<Character[]> {
    return defer(() => of(characterMocks))
  }

  fetchById(id: number): Observable<Character|null> {
    return defer(() => {
      const found = characterMocks.find(character => character.id === id);
      return of(found || null);
    })
  }
}