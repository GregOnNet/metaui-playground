import { Injectable } from '@angular/core';
import { LightsaberColor } from '../model/lightsaber-color';

@Injectable({ providedIn: 'root' })
export class LightsaberColorPalette {
  all: LightsaberColor[] = [
    new LightsaberColor('Blue', '#249BCB'),
    new LightsaberColor('Green', '#14A259'),
    new LightsaberColor('Red', '#D01824'),
    new LightsaberColor('Violet', '#82277C'),
    new LightsaberColor('None', '#000000')
  ];
}
