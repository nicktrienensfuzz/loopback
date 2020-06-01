import {Entity, Model, model, property, hasMany} from '@loopback/repository';
import {MovieFavorites} from './movie-favorites.model';

@model({settings: {strict: false}})
export class Movie extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  length: number;

  @property({
    type: 'string',
    required: true,
  })
  category: string;

  @property({
    type: 'number',
    required: true,
  })
  views: number;

  @property({
    type: 'number',
    required: true,
  })
  favorites: number;

  @hasMany(() => MovieFavorites)
  movieFavorites: MovieFavorites[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Movie>) {
    super(data);
  }
}

export interface MovieRelations {
  // describe navigational properties here
}

export type MovieWithRelations = Movie & MovieRelations;
