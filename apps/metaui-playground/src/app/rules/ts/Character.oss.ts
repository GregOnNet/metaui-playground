/**
 *  This is generated file. Do not edit !!
 *
 *  @formatter:off
 *
 */
/* tslint:disable */
export const CharacterRule = '/*     User rules.oss -- Meta-data rules. Generated file      Default definition */ class=Character {    @field=fullName {     trait:derived, heading1;     type:String;     value: ${object.firstName + " " + object.lastName};   }   field=id {      label:"Id";   }    field=avatarUrl {      label:"Profile Url";      component:ImageComponent;      bindings: {        url: $value;        alt: ${object.firstName};      };   }    field=firstName {      label:"Jedi Name";   }    field=lastName {      label:"Clan Name";   }    field=lightsaberColor {       trait:lbSelect;       choices:${component.all};   }    field=bio {      label:"Battles";      trait:longtext;   } }  /*   Distribute field to different layouts  */ class=Character {    operation=(view) {      field {       noLabelLayout:true;      }      zNone => *;      zLeft => fullName => avatarUrl;   }    operation=(edit) {       zNone => *;       zLeft => firstName => lastName => lightsaberColor;    }    operation=(create) {       zNone => *;       zLeft => firstName => lastName => lightsaberColor => bio;    }  } ';
/* tslint:disable */
/**
 *  @formatter:on
 *
 */
 
