"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoopApplication = void 0;
const tslib_1 = require("tslib");
const boot_1 = require("@loopback/boot");
const authentication_1 = require("@loopback/authentication");
const authentication_jwt_1 = require("@loopback/authentication-jwt");
const rest_explorer_1 = require("@loopback/rest-explorer");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const service_proxy_1 = require("@loopback/service-proxy");
const path_1 = tslib_1.__importDefault(require("path"));
const sequence_1 = require("./sequence");
const rest_crud_1 = require("@loopback/rest-crud");
const datasources_1 = require("./datasources");
class LoopApplication extends boot_1.BootMixin(service_proxy_1.ServiceMixin(repository_1.RepositoryMixin(rest_1.RestApplication))) {
    constructor(options = {}) {
        super(options);
        // Set up the custom sequence
        this.sequence(sequence_1.MySequence);
        // this.component(LoggingComponent);
        // Set up default home page
        this.static('/', path_1.default.join(__dirname, '../public'));
        // Customize @loopback/rest-explorer configuration here
        this.configure(rest_explorer_1.RestExplorerBindings.COMPONENT).to({
            path: '/explorer',
        });
        this.component(rest_explorer_1.RestExplorerComponent);
        this.projectRoot = __dirname;
        // Customize @loopback/boot Booter Conventions here
        this.bootOptions = {
            controllers: {
                // Customize ControllerBooter Conventions here
                dirs: ['controllers'],
                extensions: ['.controller.js'],
                nested: true,
            },
        };
        this.component(rest_crud_1.CrudRestComponent);
        // ------ ADD SNIPPET AT THE BOTTOM ---------
        // Mount authentication system
        this.component(authentication_1.AuthenticationComponent);
        // Mount jwt component
        this.component(authentication_jwt_1.JWTAuthenticationComponent);
        // Bind datasource
        this.dataSource(datasources_1.DbDataSource, authentication_jwt_1.UserServiceBindings.DATASOURCE_NAME);
        // ------------- END OF SNIPPET -------------
        //new
        this.bind(authentication_jwt_1.UserServiceBindings.USER_SERVICE).toClass(authentication_jwt_1.MyUserService);
    }
}
exports.LoopApplication = LoopApplication;
//# sourceMappingURL=application.js.map