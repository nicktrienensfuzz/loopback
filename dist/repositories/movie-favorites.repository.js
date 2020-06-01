"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieFavoritesRepository = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
const core_1 = require("@loopback/core");
let MovieFavoritesRepository = /** @class */ (() => {
    let MovieFavoritesRepository = class MovieFavoritesRepository extends repository_1.DefaultCrudRepository {
        constructor(dataSource) {
            super(models_1.MovieFavorites, dataSource);
        }
    };
    MovieFavoritesRepository = tslib_1.__decorate([
        tslib_1.__param(0, core_1.inject('datasources.db')),
        tslib_1.__metadata("design:paramtypes", [repository_1.juggler.DataSource])
    ], MovieFavoritesRepository);
    return MovieFavoritesRepository;
})();
exports.MovieFavoritesRepository = MovieFavoritesRepository;
//# sourceMappingURL=movie-favorites.repository.js.map