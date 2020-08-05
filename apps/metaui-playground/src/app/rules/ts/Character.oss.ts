/**
 *  This is generated file. Do not edit !!
 *
 *  @formatter:off
 *
 */
/* tslint:disable */
export const CharacterRule = '/*     User rules.oss -- Meta-data rules. Generated file      Default definition */ class=Character {      field=uniqueName {            label:"Id";        }         field=name {            label:"Name";        }         field=description {            trait:longtext;        }         zNone => *;        zLeft => uniqueName => name => description => created; }  /*   Sample definition for operations edit and create  */ class=Character {    operation=(edit, create) {       zNone => *;       zLeft => name => description;    }    operation=(create) {       zNone => *;       zLeft => name => description => created;    }  } ';
/* tslint:disable */
/**
 *  @formatter:on
 *
 */
 