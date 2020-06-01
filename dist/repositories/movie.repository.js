"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieRepository = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
const core_1 = require("@loopback/core");
let MovieRepository = /** @class */ (() => {
    let MovieRepository = class MovieRepository extends repository_1.DefaultCrudRepository {
        constructor(dataSource, movieFavoritesRepositoryGetter) {
            super(models_1.Movie, dataSource);
            this.movieFavoritesRepositoryGetter = movieFavoritesRepositoryGetter;
            this.movieFavorites = this.createHasManyRepositoryFactoryFor('movieFavorites', movieFavoritesRepositoryGetter);
        }
    };
    MovieRepository = tslib_1.__decorate([
        tslib_1.__param(0, core_1.inject('datasources.db')), tslib_1.__param(1, repository_1.repository.getter('MovieFavoritesRepository')),
        tslib_1.__metadata("design:paramtypes", [repository_1.juggler.DataSource, Function])
    ], MovieRepository);
    return MovieRepository;
})();
exports.MovieRepository = MovieRepository;
//# sourceMappingURL=movie.repository.js.map