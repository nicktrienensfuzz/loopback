"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const movie_favorites_model_1 = require("./movie-favorites.model");
let Movie = /** @class */ (() => {
    let Movie = class Movie extends repository_1.Entity {
        constructor(data) {
            super(data);
        }
    };
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
            required: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], Movie.prototype, "title", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'number',
            id: true,
            generated: true,
        }),
        tslib_1.__metadata("design:type", Number)
    ], Movie.prototype, "id", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'number',
            required: true,
        }),
        tslib_1.__metadata("design:type", Number)
    ], Movie.prototype, "length", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
            required: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], Movie.prototype, "category", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'number',
            required: true,
        }),
        tslib_1.__metadata("design:type", Number)
    ], Movie.prototype, "views", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'number',
            required: true,
        }),
        tslib_1.__metadata("design:type", Number)
    ], Movie.prototype, "favorites", void 0);
    tslib_1.__decorate([
        repository_1.hasMany(() => movie_favorites_model_1.MovieFavorites),
        tslib_1.__metadata("design:type", Array)
    ], Movie.prototype, "movieFavorites", void 0);
    Movie = tslib_1.__decorate([
        repository_1.model({ settings: { strict: false } }),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], Movie);
    return Movie;
})();
exports.Movie = Movie;
//# sourceMappingURL=movie.model.js.map