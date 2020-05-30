"use strict";
// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/example-todo-jwt
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const context_1 = require("@loopback/context");
const authentication_jwt_1 = require("@loopback/authentication-jwt");
const security_1 = require("@loopback/security");
let TaskController = /** @class */ (() => {
    let TaskController = class TaskController {
        constructor(todoRepository, req, jwtService, userService, user) {
            this.todoRepository = todoRepository;
            this.req = req;
            this.jwtService = jwtService;
            this.userService = userService;
            this.user = user;
        }
        async createTask(todo, currentUserProfile) {
            console.log("new item made");
            console.log(this.user);
            console.log(todo);
            //throw  currentUserProfile
            return this.todoRepository.create(todo);
        }
        async findTaskById(id, items) {
            return this.todoRepository.findById(id);
        }
        async findTasks(filter) {
            return this.todoRepository.find(filter);
        }
        async replaceTask(id, todo) {
            await this.todoRepository.replaceById(id, todo);
        }
        async updateTask(id, todo) {
            await this.todoRepository.updateById(id, todo);
        }
        async deleteTask(id) {
            await this.todoRepository.deleteById(id);
        }
    };
    tslib_1.__decorate([
        rest_1.post('/tasks', {
            responses: {
                '200': {
                    description: 'Task model instance',
                    content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Task) } },
                },
            },
        }),
        authentication_1.authenticate('jwt'),
        tslib_1.__param(0, rest_1.requestBody({
            content: {
                'application/json': {
                    schema: rest_1.getModelSchemaRef(models_1.Task, { title: 'NewTask', exclude: ['id'] }),
                },
            },
        })),
        tslib_1.__param(1, context_1.inject(security_1.SecurityBindings.USER)),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], TaskController.prototype, "createTask", null);
    tslib_1.__decorate([
        rest_1.get('/tasks/{id}', {
            responses: {
                '200': {
                    description: 'Task model instance',
                    content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Task) } },
                },
            },
        }),
        tslib_1.__param(0, rest_1.param.path.number('id')),
        tslib_1.__param(1, rest_1.param.query.boolean('items')),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number, Boolean]),
        tslib_1.__metadata("design:returntype", Promise)
    ], TaskController.prototype, "findTaskById", null);
    tslib_1.__decorate([
        rest_1.get('/tasks', {
            responses: {
                '200': {
                    description: 'Array of Task model instances',
                    content: {
                        'application/json': {
                            schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Task) },
                        },
                    },
                },
            },
        }),
        tslib_1.__param(0, rest_1.param.filter(models_1.Task)),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], TaskController.prototype, "findTasks", null);
    tslib_1.__decorate([
        rest_1.put('/tasks/{id}', {
            responses: {
                '204': {
                    description: 'Task PUT success',
                },
            },
        }),
        tslib_1.__param(0, rest_1.param.path.number('id')),
        tslib_1.__param(1, rest_1.requestBody()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number, models_1.Task]),
        tslib_1.__metadata("design:returntype", Promise)
    ], TaskController.prototype, "replaceTask", null);
    tslib_1.__decorate([
        rest_1.patch('/tasks/{id}', {
            responses: {
                '204': {
                    description: 'Task PATCH success',
                },
            },
        }),
        tslib_1.__param(0, rest_1.param.path.number('id')),
        tslib_1.__param(1, rest_1.requestBody({
            content: {
                'application/json': {
                    schema: rest_1.getModelSchemaRef(models_1.Task, { partial: true }),
                },
            },
        })),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], TaskController.prototype, "updateTask", null);
    tslib_1.__decorate([
        rest_1.del('/tasks/{id}', {
            responses: {
                '204': {
                    description: 'Task DELETE success',
                },
            },
        }),
        tslib_1.__param(0, rest_1.param.path.number('id')),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number]),
        tslib_1.__metadata("design:returntype", Promise)
    ], TaskController.prototype, "deleteTask", null);
    TaskController = tslib_1.__decorate([
        tslib_1.__param(0, repository_1.repository(repositories_1.TaskRepository)),
        tslib_1.__param(1, context_1.inject(rest_1.RestBindings.Http.REQUEST)),
        tslib_1.__param(2, context_1.inject(authentication_jwt_1.TokenServiceBindings.TOKEN_SERVICE)),
        tslib_1.__param(3, context_1.inject(authentication_jwt_1.UserServiceBindings.USER_SERVICE)),
        tslib_1.__param(4, context_1.inject(security_1.SecurityBindings.USER, { optional: true })),
        tslib_1.__metadata("design:paramtypes", [repositories_1.TaskRepository, Object, Object, authentication_jwt_1.MyUserService,
            authentication_jwt_1.User])
    ], TaskController);
    return TaskController;
})();
exports.TaskController = TaskController;
//# sourceMappingURL=task.controller.js.map