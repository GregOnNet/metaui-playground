import { Value } from '@ngx-metaui/rules';


export class LightsaberColor implements Value {


  constructor(readonly id: string = '',
              readonly color: string = '') {
  }

  className(): string {
    return 'LightsaberColor';
  }

  clone(): LightsaberColor {
    return new LightsaberColor();
  }

  getTypes(): any {
    return {
      id: String,
      color: String
    };
  }
}

// export enum LightsaberColor {
//   Blue = '#249BCB',
//   Green = '#14A259',
//   Red = '#D01824',
//   Violet = '#82277C',
//   None = '#000000'
// }

