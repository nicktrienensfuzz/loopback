"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppUser = exports.Role = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const authentication_jwt_1 = require("@loopback/authentication-jwt");
var Role;
(function (Role) {
    Role["admin"] = "admin";
    Role["viewer"] = "viewer";
    Role["kiosk"] = "kiosk";
})(Role = exports.Role || (exports.Role = {}));
let AppUser = /** @class */ (() => {
    let AppUser = class AppUser extends authentication_jwt_1.User {
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
            jsonSchema: {
                enum: Object.values(Role),
            },
            required: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], AppUser.prototype, "role", void 0);
    AppUser = tslib_1.__decorate([
        repository_1.model({ settings: { strict: false } }),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], AppUser);
    return AppUser;
})();
exports.AppUser = AppUser;
//# sourceMappingURL=app-user.model.js.map