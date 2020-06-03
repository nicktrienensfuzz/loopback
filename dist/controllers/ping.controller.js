"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PingController = void 0;
const tslib_1 = require("tslib");
const rest_1 = require("@loopback/rest");
const context_1 = require("@loopback/context");
const lodash_1 = tslib_1.__importDefault(require("lodash"));
/**
 * OpenAPI response for ping()
 */
const PING_RESPONSE = {
    description: 'Ping Response',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                title: 'PingResponse',
                properties: {
                    greeting: { type: 'string' },
                    date: { type: 'string' },
                    url: { type: 'string' },
                    incomingRequest: {
                        type: 'object',
                        properties: {
                            'Content-Type': { type: 'string' },
                        },
                        additionalProperties: true,
                    },
                },
            },
        },
    },
};
/**
 * A simple controller to bounce back http requests
 */
let PingController = /** @class */ (() => {
    let PingController = class PingController {
        constructor(req) {
            this.req = req;
        }
        // Map to `GET /ping`
        ping() {
            console.log(lodash_1.default.pick(this.req, ['query', 'headers', 'body']));
            return {
                greeting: 'Hello from LoopBack',
                date: new Date(),
                url: this.req.url,
                incomingRequest: lodash_1.default.pick(this.req, ['query', 'headers', 'body'])
            };
        }
        // Map to `GET /ping`
        echo() {
            console.log(lodash_1.default.pick(this.req, ['query', 'headers', 'body']));
            return {
                greeting: 'Hello from LoopBack',
                date: new Date(),
                url: this.req.url,
                incomingRequest: lodash_1.default.pick(this.req, ['query', 'headers', 'body'])
            };
        }
    };
    tslib_1.__decorate([
        rest_1.get('/ping', {
            responses: {
                '200': PING_RESPONSE,
            },
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Object)
    ], PingController.prototype, "ping", null);
    tslib_1.__decorate([
        rest_1.post('/echo', {
            responses: {
                '200': PING_RESPONSE,
            },
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Object)
    ], PingController.prototype, "echo", null);
    PingController = tslib_1.__decorate([
        tslib_1.__param(0, context_1.inject(rest_1.RestBindings.Http.REQUEST)),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], PingController);
    return PingController;
})();
exports.PingController = PingController;
//# sourceMappingURL=ping.controller.js.map