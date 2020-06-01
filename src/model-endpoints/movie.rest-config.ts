import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {Movie} from '../models';

const config: ModelCrudRestApiConfig = {
  model: Movie,
  pattern: 'CrudRest',
  dataSource: 'db',
  basePath: '/movies',
};
module.exports = config;
