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
        constructor(dataSource, userCredentialsRepositoryGetter) {
            super(models_1.AppUser, dataSource);
            this.userCredentialsRepositoryGetter = userCredentialsRepositoryGetter;
            this.userCredentials = this.createHasOneRepositoryFactoryFor('userCredentials', userCredentialsRepositoryGetter);
            this.registerInclusionResolver('userCredentials', this.userCredentials.inclusionResolver);
        }
        async findCredentials(userId) {
            try {
                return await this.userCredentials(userId).get();
            }
            catch (err) {
                if (err.code === 'ENTITY_NOT_FOUND') {
                    return undefined;
                }
                throw err;
            }
        }
    };
    AppUserRepository = tslib_1.__decorate([
        tslib_1.__param(0, core_1.inject('datasources.db')),
        tslib_1.__param(1, repository_1.repository.getter('UserCredentialsRepository')),
        tslib_1.__metadata("design:paramtypes", [datasources_1.DbDataSource, Function])
    ], AppUserRepository);
    return AppUserRepository;
})();
exports.AppUserRepository = AppUserRepository;
//# sourceMappingURL=app-user.repository.js.map