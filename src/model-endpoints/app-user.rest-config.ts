import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {AppUser} from '../models';

const config: ModelCrudRestApiConfig = {
  model: AppUser,
  pattern: 'CrudRest',
  dataSource: 'db',
  basePath: '/app-users',
};
module.exports = config;
