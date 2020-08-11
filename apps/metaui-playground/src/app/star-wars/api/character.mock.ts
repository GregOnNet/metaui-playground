import { Character } from '../model/character';
import { LightsaberColor } from '../model/lightsaber-color';

export const characterMocks: Character[] = [
  new Character(
    0,
    'assets/obiwan.jpg',
    'Obiwan',
    'Kenobi',
    new LightsaberColor('Blue', '#249BCB')
  ),
  new Character(
    1,
    'assets/yoda.jpg',
    'Yoda',
    '',
    new LightsaberColor('Green', '#14A259')
  ),
  new Character(
    2,
    'assets/luke.jpg',
    'Luke',
    'Skywalker',
    new LightsaberColor('Green', '#14A259')
  ),
  new Character(
    3,
    'assets/anikan.jpg',
    'Anikan',
    'Skywalker',
    new LightsaberColor('Blue', '#249BCB')
  ),
  new Character(
    4,
    'assets/mace.jpg',
    'Mace',
    'Windu',
    new LightsaberColor('Violet', '#82277C')
  ),
  new Character(
    5,
    'assets/revan.jpg',
    'Revan',
    '',
    new LightsaberColor('Red', '#D01824')
  )
];
