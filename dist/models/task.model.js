"use strict";
// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/example-rest-crud
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Task = /** @class */ (() => {
    let Task = class Task extends repository_1.Entity {
        constructor(data) {
            super(data);
        }
    };
    tslib_1.__decorate([
        repository_1.property({
            type: 'number',
            id: true,
            generated: false,
        }),
        tslib_1.__metadata("design:type", Number)
    ], Task.prototype, "id", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
            required: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], Task.prototype, "title", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
        }),
        tslib_1.__metadata("design:type", String)
    ], Task.prototype, "desc", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'boolean',
        }),
        tslib_1.__metadata("design:type", Boolean)
    ], Task.prototype, "isComplete", void 0);
    Task = tslib_1.__decorate([
        repository_1.model(),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], Task);
    return Task;
})();
exports.Task = Task;
//# sourceMappingURL=task.model.js.map