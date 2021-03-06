"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieFavorites = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let MovieFavorites = /** @class */ (() => {
    let MovieFavorites = class MovieFavorites extends repository_1.Entity {
        constructor(data) {
            super(data);
        }
    };
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
            id: true,
            generated: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], MovieFavorites.prototype, "id", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
            required: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], MovieFavorites.prototype, "appuser_id", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
            required: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], MovieFavorites.prototype, "movie_id", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'number',
        }),
        tslib_1.__metadata("design:type", Number)
    ], MovieFavorites.prototype, "movieId", void 0);
    MovieFavorites = tslib_1.__decorate([
        repository_1.model(),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], MovieFavorites);
    return MovieFavorites;
})();
exports.MovieFavorites = MovieFavorites;
//# sourceMappingURL=movie-favorites.model.js.map