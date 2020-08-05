import { LightsaberColor } from './lightsaber-color';

export class Character {
  constructor(
    public id: number,
    public avatarUrl: string,
    public firstName: string,
    public lastName: string,
    public lightsaberColor: LightsaberColor
  ) {}

  static empty(): Character {
    return new Character(-1, '', '', '', LightsaberColor.None);
  }
}
