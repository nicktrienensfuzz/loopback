"use strict";
// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/example-todo-jwt
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const authentication_jwt_1 = require("@loopback/authentication-jwt");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const context_1 = require("@loopback/context");
const security_1 = require("@loopback/security");
let TodoController = /** @class */ (() => {
    let TodoController = class TodoController {
        constructor(req, todoRepository, jwtService, userService, user) {
            this.req = req;
            this.todoRepository = todoRepository;
            this.jwtService = jwtService;
            this.userService = userService;
            this.user = user;
        }
        async createTodo(todo, currentUserProfile) {
            console.log("new item made");
            console.log(this.user);
            console.log(todo);
            throw currentUserProfile;
            //return this.todoRepository.create(todo)
        }
        async findTodoById(id, items) {
            return this.todoRepository.findById(id);
        }
        async findTodos(filter) {
            return this.todoRepository.find(filter);
        }
        async replaceTodo(id, todo) {
            await this.todoRepository.replaceById(id, todo);
        }
        async updateTodo(id, todo) {
            await this.todoRepository.updateById(id, todo);
        }
        async deleteTodo(id) {
            await this.todoRepository.deleteById(id);
        }
    };
    tslib_1.__decorate([
        rest_1.post('/todos', {
            responses: {
                '200': {
                    description: 'Todo model instance, nick',
                    content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Todo) } },
                },
            },
        }),
        authentication_1.authenticate('jwt'),
        tslib_1.__param(0, rest_1.requestBody({
            content: {
                'application/json': {
                    schema: rest_1.getModelSchemaRef(models_1.Todo, { title: 'NewTodo', exclude: ['id'] }),
                },
            },
        })),
        tslib_1.__param(1, context_1.inject(security_1.SecurityBindings.USER)),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], TodoController.prototype, "createTodo", null);
    tslib_1.__decorate([
        rest_1.get('/todos/{id}', {
            responses: {
                '200': {
                    description: 'Todo model instance',
                    content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Todo) } },
                },
            },
        }),
        tslib_1.__param(0, rest_1.param.path.number('id')),
        tslib_1.__param(1, rest_1.param.query.boolean('items')),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number, Boolean]),
        tslib_1.__metadata("design:returntype", Promise)
    ], TodoController.prototype, "findTodoById", null);
    tslib_1.__decorate([
        rest_1.get('/todos', {
            responses: {
                '200': {
                    description: 'Array of Todo model instances',
                    content: {
                        'application/json': {
                            schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Todo) },
                        },
                    },
                },
            },
        }),
        tslib_1.__param(0, rest_1.param.filter(models_1.Todo)),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], TodoController.prototype, "findTodos", null);
    tslib_1.__decorate([
        rest_1.put('/todos/{id}', {
            responses: {
                '204': {
                    description: 'Todo PUT success',
                },
            },
        }),
        tslib_1.__param(0, rest_1.param.path.number('id')),
        tslib_1.__param(1, rest_1.requestBody()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number, models_1.Todo]),
        tslib_1.__metadata("design:returntype", Promise)
    ], TodoController.prototype, "replaceTodo", null);
    tslib_1.__decorate([
        rest_1.patch('/todos/{id}', {
            responses: {
                '204': {
                    description: 'Todo PATCH success',
                },
            },
        }),
        tslib_1.__param(0, rest_1.param.path.number('id')),
        tslib_1.__param(1, rest_1.requestBody({
            content: {
                'application/json': {
                    schema: rest_1.getModelSchemaRef(models_1.Todo, { partial: true }),
                },
            },
        })),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], TodoController.prototype, "updateTodo", null);
    tslib_1.__decorate([
        rest_1.del('/todos/{id}', {
            responses: {
                '204': {
                    description: 'Todo DELETE success',
                },
            },
        }),
        tslib_1.__param(0, rest_1.param.path.number('id')),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number]),
        tslib_1.__metadata("design:returntype", Promise)
    ], TodoController.prototype, "deleteTodo", null);
    TodoController = tslib_1.__decorate([
        tslib_1.__param(0, context_1.inject(rest_1.RestBindings.Http.REQUEST)),
        tslib_1.__param(1, repository_1.repository(repositories_1.TodoRepository)),
        tslib_1.__param(2, context_1.inject(authentication_jwt_1.TokenServiceBindings.TOKEN_SERVICE)),
        tslib_1.__param(3, context_1.inject(authentication_jwt_1.UserServiceBindings.USER_SERVICE)),
        tslib_1.__param(4, context_1.inject(security_1.SecurityBindings.USER, { optional: true })),
        tslib_1.__metadata("design:paramtypes", [Object, repositories_1.TodoRepository, Object, authentication_jwt_1.MyUserService,
            authentication_jwt_1.User])
    ], TodoController);
    return TodoController;
})();
exports.TodoController = TodoController;
//# sourceMappingURL=todo.controller.js.map