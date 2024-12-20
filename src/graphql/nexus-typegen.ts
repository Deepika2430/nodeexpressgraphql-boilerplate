/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
    /**
     * The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
     */
    json<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "JSON";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
    /**
     * The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
     */
    json<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "JSON";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  DynamicPlaylistConfig: { // input type
    customParameters?: NexusGenInputs['customParameters'] | null; // customParameters
    itemsPerPage?: number | null; // Int
    pageNumber?: number | null; // Int
    sort?: NexusGenInputs['Sort'] | null; // Sort
    tags?: NexusGenInputs['Tags'] | null; // Tags
  }
  PlaylistMetadata: { // input type
    customParameters?: NexusGenScalars['JSON'] | null; // JSON
    description?: string | null; // String
    title?: string | null; // String
    type?: string | null; // String
  }
  Sort: { // input type
    field?: string | null; // String
    order?: string | null; // String
  }
  Tags: { // input type
    exclude?: string | null; // String
    include?: string | null; // String
  }
  customParameters: { // input type
    exclude?: NexusGenScalars['JSON'] | null; // JSON
    include?: NexusGenScalars['JSON'] | null; // JSON
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
  JSON: any
}

export interface NexusGenObjects {
  Media: { // root type
    description?: string | null; // String
    kind?: string | null; // String
    playlist?: Array<NexusGenRootTypes['MediaPlaylistItem'] | null> | null; // [MediaPlaylistItem]
    title: string; // String!
  }
  MediaPlaylistItem: { // root type
    duration: number; // Float!
    image?: string | null; // String
    images?: Array<NexusGenScalars['JSON'] | null> | null; // [JSON]
    mediaid: string; // String!
    pubDate: NexusGenScalars['DateTime']; // DateTime!
    sources?: Array<NexusGenScalars['JSON'] | null> | null; // [JSON]
    tags?: string | null; // String
    title: string; // String!
    tracks?: Array<NexusGenScalars['JSON'] | null> | null; // [JSON]
  }
  Mutation: {};
  Playlist: { // root type
    description?: string | null; // String
    feedid: string; // String!
    playlist?: Array<NexusGenRootTypes['Media'] | null> | null; // [Media]
    title: string; // String!
  }
  Query: {};
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Media: { // field return type
    description: string | null; // String
    kind: string | null; // String
    playlist: Array<NexusGenRootTypes['MediaPlaylistItem'] | null> | null; // [MediaPlaylistItem]
    title: string; // String!
  }
  MediaPlaylistItem: { // field return type
    duration: number; // Float!
    image: string | null; // String
    images: Array<NexusGenScalars['JSON'] | null> | null; // [JSON]
    mediaid: string; // String!
    pubDate: NexusGenScalars['DateTime']; // DateTime!
    sources: Array<NexusGenScalars['JSON'] | null> | null; // [JSON]
    tags: string | null; // String
    title: string; // String!
    tracks: Array<NexusGenScalars['JSON'] | null> | null; // [JSON]
  }
  Mutation: { // field return type
    createPlaylist: NexusGenScalars['JSON'] | null; // JSON
  }
  Playlist: { // field return type
    customParameters: NexusGenScalars['JSON'] | null; // JSON
    description: string | null; // String
    feedid: string; // String!
    playlist: Array<NexusGenRootTypes['Media'] | null> | null; // [Media]
    title: string; // String!
  }
  Query: { // field return type
    getPlaylistById: NexusGenScalars['JSON'] | null; // JSON
    media: NexusGenScalars['JSON'] | null; // JSON
  }
}

export interface NexusGenFieldTypeNames {
  Media: { // field return type name
    description: 'String'
    kind: 'String'
    playlist: 'MediaPlaylistItem'
    title: 'String'
  }
  MediaPlaylistItem: { // field return type name
    duration: 'Float'
    image: 'String'
    images: 'JSON'
    mediaid: 'String'
    pubDate: 'DateTime'
    sources: 'JSON'
    tags: 'String'
    title: 'String'
    tracks: 'JSON'
  }
  Mutation: { // field return type name
    createPlaylist: 'JSON'
  }
  Playlist: { // field return type name
    customParameters: 'JSON'
    description: 'String'
    feedid: 'String'
    playlist: 'Media'
    title: 'String'
  }
  Query: { // field return type name
    getPlaylistById: 'JSON'
    media: 'JSON'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createPlaylist: { // args
      dynamicPlaylistConfig: NexusGenInputs['DynamicPlaylistConfig']; // DynamicPlaylistConfig!
      playlistMetadata: NexusGenInputs['PlaylistMetadata']; // PlaylistMetadata!
    }
  }
  Query: {
    getPlaylistById: { // args
      playlistId: string; // ID!
    }
    media: { // args
      id: string; // ID!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}