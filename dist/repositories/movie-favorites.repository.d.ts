import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { MovieFavorites, MovieFavoritesRelations } from '../models';
export declare class MovieFavoritesRepository extends DefaultCrudRepository<MovieFavorites, typeof MovieFavorites.prototype.id, MovieFavoritesRelations> {
    constructor(dataSource: juggler.DataSource);
}
