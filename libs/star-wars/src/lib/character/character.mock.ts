import { Character } from './character';
import { LightsaberColor } from './lightsaber-color';

export const characterMocks: Character[] = [
  new Character(0, 'assets/obiwan.jpg' , 'Obiwan', 'Kenobi', LightsaberColor.Blue),
  new Character(1, 'assets/yoda.jpg' , 'Yoda', '', LightsaberColor.Green),
  new Character(1, 'assets/luke.jpg' , 'Luke', 'Skywalker', LightsaberColor.Green),
  new Character(2, 'assets/anikan.jpg' , 'Anikan', 'Skywalker', LightsaberColor.Blue),
  new Character(3, 'assets/mace.jpg' , 'Mace', 'Windu', LightsaberColor.Violet),
  new Character(4, 'assets/revan.jpg' , 'Revan', '', LightsaberColor.Red),
];
