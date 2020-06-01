import { DefaultCrudRepository, juggler, HasManyRepositoryFactory } from '@loopback/repository';
import { Movie, MovieRelations, MovieFavorites } from '../models';
import { Getter } from '@loopback/core';
import { MovieFavoritesRepository } from './movie-favorites.repository';
export declare class MovieRepository extends DefaultCrudRepository<Movie, typeof Movie.prototype.id, MovieRelations> {
    protected movieFavoritesRepositoryGetter: Getter<MovieFavoritesRepository>;
    readonly movieFavorites: HasManyRepositoryFactory<MovieFavorites, typeof Movie.prototype.id>;
    constructor(dataSource: juggler.DataSource, movieFavoritesRepositoryGetter: Getter<MovieFavoritesRepository>);
}
