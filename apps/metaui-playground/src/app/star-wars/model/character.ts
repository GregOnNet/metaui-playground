import { Entity } from '@ngx-metaui/rules';


import { LightsaberColor } from './lightsaber-color';

export class Character implements Entity {
  constructor(
    public id: number,
    public avatarUrl: string,
    public firstName: string,
    public lastName: string,
    public lightsaberColor: LightsaberColor,
    public bio: string = ''
  ) {
  }

  static empty(): Character {
    return new Character(-1, '', '', '', LightsaberColor.None, '');
  }

  identity(): string {
    return this.id + '';
  }

  className(): string {
    return 'Character';
  }


  getTypes(): any {
    return {
      id: String,
      avatarUrl: String,
      firstName: String,
      lastName: String,
      lightsaberColor: LightsaberColor,
      bio: String
    };
  }
}
