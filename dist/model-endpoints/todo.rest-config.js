"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todo_model_1 = require("../models/todo.model");
const config = {
    model: todo_model_1.Todo,
    pattern: 'CrudRest',
    dataSource: 'db',
    basePath: '/todos',
};
module.exports = config;
//# sourceMappingURL=todo.rest-config.js.map