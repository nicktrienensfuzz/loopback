"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieMovieFavoritesController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let MovieMovieFavoritesController = /** @class */ (() => {
    let MovieMovieFavoritesController = class MovieMovieFavoritesController {
        constructor(movieRepository) {
            this.movieRepository = movieRepository;
        }
        async find(id, filter) {
            return this.movieRepository.movieFavorites(id).find(filter);
        }
        async create(id, movieFavorites) {
            return this.movieRepository.movieFavorites(id).create(movieFavorites);
        }
        async patch(id, movieFavorites, where) {
            return this.movieRepository.movieFavorites(id).patch(movieFavorites, where);
        }
        async delete(id, where) {
            return this.movieRepository.movieFavorites(id).delete(where);
        }
    };
    tslib_1.__decorate([
        rest_1.get('/movies/{id}/movie-favorites', {
            responses: {
                '200': {
                    description: 'Array of Movie has many MovieFavorites',
                    content: {
                        'application/json': {
                            schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.MovieFavorites) },
                        },
                    },
                },
            },
        }),
        tslib_1.__param(0, rest_1.param.path.number('id')),
        tslib_1.__param(1, rest_1.param.query.object('filter')),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], MovieMovieFavoritesController.prototype, "find", null);
    tslib_1.__decorate([
        rest_1.post('/movies/{id}/movie-favorites', {
            responses: {
                '200': {
                    description: 'Movie model instance',
                    content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.MovieFavorites) } },
                },
            },
        }),
        tslib_1.__param(0, rest_1.param.path.number('id')),
        tslib_1.__param(1, rest_1.requestBody({
            content: {
                'application/json': {
                    schema: rest_1.getModelSchemaRef(models_1.MovieFavorites, {
                        title: 'NewMovieFavoritesInMovie',
                        exclude: ['id'],
                        optional: ['movieId']
                    }),
                },
            },
        })),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], MovieMovieFavoritesController.prototype, "create", null);
    tslib_1.__decorate([
        rest_1.patch('/movies/{id}/movie-favorites', {
            responses: {
                '200': {
                    description: 'Movie.MovieFavorites PATCH success count',
                    content: { 'application/json': { schema: repository_1.CountSchema } },
                },
            },
        }),
        tslib_1.__param(0, rest_1.param.path.number('id')),
        tslib_1.__param(1, rest_1.requestBody({
            content: {
                'application/json': {
                    schema: rest_1.getModelSchemaRef(models_1.MovieFavorites, { partial: true }),
                },
            },
        })),
        tslib_1.__param(2, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.MovieFavorites))),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], MovieMovieFavoritesController.prototype, "patch", null);
    tslib_1.__decorate([
        rest_1.del('/movies/{id}/movie-favorites', {
            responses: {
                '200': {
                    description: 'Movie.MovieFavorites DELETE success count',
                    content: { 'application/json': { schema: repository_1.CountSchema } },
                },
            },
        }),
        tslib_1.__param(0, rest_1.param.path.number('id')),
        tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.MovieFavorites))),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], MovieMovieFavoritesController.prototype, "delete", null);
    MovieMovieFavoritesController = tslib_1.__decorate([
        tslib_1.__param(0, repository_1.repository(repositories_1.MovieRepository)),
        tslib_1.__metadata("design:paramtypes", [repositories_1.MovieRepository])
    ], MovieMovieFavoritesController);
    return MovieMovieFavoritesController;
})();
exports.MovieMovieFavoritesController = MovieMovieFavoritesController;
//# sourceMappingURL=movie-movie-favorites.controller.js.map