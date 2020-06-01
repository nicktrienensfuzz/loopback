"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const config = {
    model: models_1.Todo,
    pattern: 'CrudRest',
    dataSource: 'db',
    basePath: '/todos',
};
module.exports = config;
//# sourceMappingURL=todo.rest-config.js.map