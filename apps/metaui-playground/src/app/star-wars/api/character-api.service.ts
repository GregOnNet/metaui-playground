import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Character } from '../model/character';
import { characterMocks } from './character.mock';

@Injectable({ providedIn: 'root' })
export class CharacterApi {
  private characters = characterMocks;

  fetchAll(): Observable<Character[]> {
    return of(this.characters);
  }

  fetchById(id: number | string): Observable<Character | null> {
    const found = this.characters.find(character => character.id === +id);
    return of(Object.assign(Character.empty(), found) || null);
  }

  save(character: Character | null): Observable<Character | null> {
    return this.update(character).pipe(
      catchError(() => {
        if (character) this.characters.push(character);
        return of(character || null);
      })
    );
  }

  remove(id: string) {
    this.characters = this.characters.filter(character => character.id !== +id);
    return of(true);
  }

  update(characterUpdate: Partial<Character> | null) {
    const characterOrigin = this.characters.find(
      character => character.id === characterUpdate?.id
    );

    if (!characterOrigin) {
      return throwError(
        `[Character API] Unable to find character with id "${characterUpdate?.id}"`
      );
    }

    Object.assign(characterOrigin, characterUpdate);

    this.characters = this.characters.map(character =>
      character.id === characterUpdate?.id
        ? Object.assign(character, characterUpdate)
        : character
    );

    return of(characterOrigin);
  }
}
