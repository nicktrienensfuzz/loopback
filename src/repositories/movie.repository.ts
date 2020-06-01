import {DefaultCrudRepository, juggler, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Movie, MovieRelations, MovieFavorites, MovieFavoritesRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {MovieFavoritesRepository} from './movie-favorites.repository';

export class MovieRepository extends DefaultCrudRepository<
  Movie,
  typeof Movie.prototype.id,
  MovieRelations
> {

  public readonly movieFavorites: HasManyRepositoryFactory<MovieFavorites, typeof Movie.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: juggler.DataSource, @repository.getter('MovieFavoritesRepository') protected movieFavoritesRepositoryGetter: Getter<MovieFavoritesRepository>,
  ) {
    super(Movie, dataSource);
    this.movieFavorites = this.createHasManyRepositoryFactoryFor('movieFavorites', movieFavoritesRepositoryGetter,);
  }
}

