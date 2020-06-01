import { Entity } from '@loopback/repository';
import { MovieFavorites } from './movie-favorites.model';
export declare class Movie extends Entity {
    title: string;
    id?: number;
    length: number;
    category: string;
    views: number;
    favorites: number;
    movieFavorites: MovieFavorites[];
    [prop: string]: any;
    constructor(data?: Partial<Movie>);
}
export interface MovieRelations {
}
export declare type MovieWithRelations = Movie & MovieRelations;
