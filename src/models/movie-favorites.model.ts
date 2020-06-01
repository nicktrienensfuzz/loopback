import {Entity, model, property} from '@loopback/repository';

@model()
export class MovieFavorites extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  appuser_id: string;

  @property({
    type: 'string',
    required: true,
  })
  movie_id: string;

  @property({
    type: 'number',
  })
  movieId?: number;

  constructor(data?: Partial<MovieFavorites>) {
    super(data);
  }
}

export interface MovieFavoritesRelations {
  // describe navigational properties here
}

export type MovieFavoritesWithRelations = MovieFavorites & MovieFavoritesRelations;
