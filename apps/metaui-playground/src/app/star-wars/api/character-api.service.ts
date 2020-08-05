import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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
    return of(found || null);
  }

  update(characterUpdate: Partial<Character>) {
    const characterOrigin = this.characters.find(
      character => character.id === characterUpdate.id
    );

    if (!characterOrigin) {
      throw new Error(
        `[Character API] Unable to find character with id "${characterUpdate.id}"`
      );
    }

    Object.assign(characterOrigin, characterUpdate);

    this.characters = this.characters.map(character =>
      character.id === characterUpdate.id
        ? Object.assign(character, characterUpdate)
        : character
    );

    return of(characterOrigin);
  }

  remove(id: string) {
    this.characters = this.characters.filter(character => character.id !== +id);
    return of(true);
  }
}
