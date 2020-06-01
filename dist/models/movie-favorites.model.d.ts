import { Entity } from '@loopback/repository';
export declare class MovieFavorites extends Entity {
    id?: string;
    appuser_id: string;
    movie_id: string;
    movieId?: number;
    constructor(data?: Partial<MovieFavorites>);
}
export interface MovieFavoritesRelations {
}
export declare type MovieFavoritesWithRelations = MovieFavorites & MovieFavoritesRelations;
