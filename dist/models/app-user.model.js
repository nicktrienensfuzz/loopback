"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppUser = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let AppUser = /** @class */ (() => {
    let AppUser = class AppUser extends repository_1.Entity {
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
    ], AppUser.prototype, "name", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
            id: true,
            generated: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], AppUser.prototype, "id", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
            required: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], AppUser.prototype, "email", void 0);
    AppUser = tslib_1.__decorate([
        repository_1.model({ settings: { strict: false } }),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], AppUser);
    return AppUser;
})();
exports.AppUser = AppUser;
//# sourceMappingURL=app-user.model.js.map