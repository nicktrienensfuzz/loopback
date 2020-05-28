import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {Todo} from '../models/todo.model';

const config: ModelCrudRestApiConfig = {
  model: Todo,
  pattern: 'CrudRest',
  dataSource: 'db',
  basePath: '/todos',
};
module.exports = config;
