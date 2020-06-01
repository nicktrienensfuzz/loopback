import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Movie, MovieRelations, MovieFavorites, MovieFavoritesRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MovieFavoritesRepository extends DefaultCrudRepository<
    MovieFavorites,
    typeof MovieFavorites.prototype.id,
    MovieFavoritesRelations
    > {
    constructor(@inject('datasources.db') dataSource: juggler.DataSource) {
        super(MovieFavorites, dataSource);
    }
}
