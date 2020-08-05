import { LightsaberColor } from '../model/lightsaber-color';
import { Character } from '../model/character';

export const characterMocks: Character[] = [
  new Character(
    0,
    'assets/obiwan.jpg',
    'Obiwan',
    'Kenobi',
    LightsaberColor.Blue
  ),
  new Character(1, 'assets/yoda.jpg', 'Yoda', '', LightsaberColor.Green),
  new Character(
    2,
    'assets/luke.jpg',
    'Luke',
    'Skywalker',
    LightsaberColor.Green
  ),
  new Character(
    3,
    'assets/anikan.jpg',
    'Anikan',
    'Skywalker',
    LightsaberColor.Blue
  ),
  new Character(4, 'assets/mace.jpg', 'Mace', 'Windu', LightsaberColor.Violet),
  new Character(5, 'assets/revan.jpg', 'Revan', '', LightsaberColor.Red)
];
