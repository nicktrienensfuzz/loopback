import { Count, Filter, Where } from '@loopback/repository';
import { Movie, MovieFavorites } from '../models';
import { MovieRepository } from '../repositories';
export declare class MovieMovieFavoritesController {
    protected movieRepository: MovieRepository;
    constructor(movieRepository: MovieRepository);
    find(id: number, filter?: Filter<MovieFavorites>): Promise<MovieFavorites[]>;
    create(id: typeof Movie.prototype.id, movieFavorites: Omit<MovieFavorites, 'id'>): Promise<MovieFavorites>;
    patch(id: number, movieFavorites: Partial<MovieFavorites>, where?: Where<MovieFavorites>): Promise<Count>;
    delete(id: number, where?: Where<MovieFavorites>): Promise<Count>;
}
