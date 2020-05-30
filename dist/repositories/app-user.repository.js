"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppUserRepository = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
const datasources_1 = require("../datasources");
const core_1 = require("@loopback/core");
let AppUserRepository = /** @class */ (() => {
    let AppUserRepository = class AppUserRepository extends repository_1.DefaultCrudRepository {
        constructor(dataSource) {
            super(models_1.AppUser, dataSource);
        }
    };
    AppUserRepository = tslib_1.__decorate([
        tslib_1.__param(0, core_1.inject('datasources.db')),
        tslib_1.__metadata("design:paramtypes", [datasources_1.DbDataSource])
    ], AppUserRepository);
    return AppUserRepository;
})();
exports.AppUserRepository = AppUserRepository;
//# sourceMappingURL=app-user.repository.js.map