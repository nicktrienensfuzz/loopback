import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {Todo} from '../models';

const config: ModelCrudRestApiConfig = {
  model: Todo,
  pattern: 'CrudRest',
  dataSource: 'db',
  basePath: '/todos',
};
module.exports = config;
