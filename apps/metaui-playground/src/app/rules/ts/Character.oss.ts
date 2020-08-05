/**
 *  This is generated file. Do not edit !!
 *
 *  @formatter:off
 *
 */
/* tslint:disable */
export const CharacterRule = '/*     User rules.oss -- Meta-data rules. Generated file      Default definition */ class=Character {    field=id {      label:"Id";   }    field=avatarUrl {      label:"Profile Url";   }    field=firstName {      label:"Jedi Name";   }    field=lastName {      label:"Clan Name";   }    field=lightsaberColor {       trait:asSelect;       choices:["Blue", "Green", "Red", "Violet", "None"];   }    field=bio {      label:"Battles";   } }  /*   Distribute field to different layouts  */ class=Character {    operation=(edit) {       zNone => *;       zLeft => firstName => lastName => lightsaberColor;    }    operation=(create) {       zNone => *;         zLeft => firstName => lastName => lightsaberColor => bio;    }  } ';
/* tslint:disable */
/**
 *  @formatter:on
 *
 */
 