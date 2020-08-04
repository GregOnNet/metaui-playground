import { Injectable } from '@angular/core';
import { defer, Observable, of } from 'rxjs';
import { Character } from './character';
import { characterMocks } from './character.mock';

@Injectable({ providedIn: 'root' })
export class CharacterApi {
  fetchAll(): Observable<Character[]> {
    return defer(() => of(characterMocks));
  }

  fetchById(id: number | string): Observable<Character | null> {
    return defer(() => {
      const found = characterMocks.find(character => character.id === +id);
      return of(found || null);
    });
  }
}
