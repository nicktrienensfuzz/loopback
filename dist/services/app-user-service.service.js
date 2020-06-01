"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppUserService = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const security_1 = require("@loopback/security");
const bcryptjs_1 = require("bcryptjs");
const authentication_jwt_1 = require("@loopback/authentication-jwt");
//@bind({scope: BindingScope.TRANSIENT})
let AppUserService = /** @class */ (() => {
    let AppUserService = class AppUserService {
        constructor(userRepository) {
            this.userRepository = userRepository;
            console.log("AppUserService created");
        }
        async verifyCredentials(credentials) {
            const invalidCredentialsError = 'Invalid email or password.';
            const foundUser = await this.userRepository.findOne({
                where: { email: credentials.email },
            });
            if (!foundUser) {
                throw new rest_1.HttpErrors.Unauthorized(invalidCredentialsError);
            }
            const credentialsFound = await this.userRepository.findCredentials(foundUser.id);
            if (!credentialsFound) {
                throw new rest_1.HttpErrors.Unauthorized(invalidCredentialsError);
            }
            const passwordMatched = await bcryptjs_1.compare(credentials.password, credentialsFound.password);
            if (!passwordMatched) {
                throw new rest_1.HttpErrors.Unauthorized(invalidCredentialsError);
            }
            return foundUser;
        }
        async verifyEmailNotTaken(email) {
            console.log("testing");
            const invalidCredentialsError = 'email not availble.';
            const foundUser = await this.userRepository.findOne({
                where: { email: email },
            });
            if (!foundUser) {
                return true;
            }
            throw new rest_1.HttpErrors.Unauthorized(invalidCredentialsError);
        }
        convertToUserProfile(user) {
            return {
                [security_1.securityId]: user.id.toString(),
                name: user.username,
                id: user.id,
                email: user.email,
            };
        }
    };
    AppUserService = tslib_1.__decorate([
        tslib_1.__param(0, repository_1.repository(authentication_jwt_1.UserRepository)),
        tslib_1.__metadata("design:paramtypes", [authentication_jwt_1.UserRepository])
    ], AppUserService);
    return AppUserService;
})();
exports.AppUserService = AppUserService;
//# sourceMappingURL=app-user-service.service.js.map