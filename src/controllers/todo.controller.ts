// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/example-todo-jwt
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {authenticate, TokenService} from '@loopback/authentication';
import {Filter, repository} from '@loopback/repository';
import {
  Request,
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody, RestBindings,
} from '@loopback/rest';

import {
  Credentials,
  MyUserService,
  TokenServiceBindings,
  User,
  UserRepository,
  UserServiceBindings,
} from '@loopback/authentication-jwt';

import {Todo} from '../models';
import {TodoRepository} from '../repositories';
import {inject} from "@loopback/context";
import {SecurityBindings, UserProfile} from "@loopback/security";
import {loadavg} from "os";
import _ from 'lodash';


export class TodoController {
  constructor(
      @inject(RestBindings.Http.REQUEST) private req: Request,
    @repository(TodoRepository) protected todoRepository: TodoRepository,
    @inject(TokenServiceBindings.TOKEN_SERVICE) public jwtService: TokenService,
    @inject(UserServiceBindings.USER_SERVICE) public userService: MyUserService,
    @inject(SecurityBindings.USER, {optional: true}) public user: User,
    //@inject(LoggingBindings.WINSTON_LOGGER) private logger: Logger
  ) {}


  @post('/todos', {
    responses: {
      '200': {
        description: 'Todo model instance, nick',
        content: {'application/json': {schema: getModelSchemaRef(Todo)}},
      },
    },
  })
  @authenticate('jwt')
  async createTodo(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Todo, {title: 'NewTodo', exclude: ['id']}),
        },
      },
    })
    todo: Omit<Todo, 'id'>,
    @inject(SecurityBindings.USER) currentUserProfile: UserProfile
  ): Promise<Todo> {
    console.log("new item made")
    console.log(this.user)
    console.log(todo)
    throw  currentUserProfile
    //return this.todoRepository.create(todo)

  }

  @get('/todos/{id}', {
    responses: {
      '200': {
        description: 'Todo model instance',
        content: {'application/json': {schema: getModelSchemaRef(Todo)}},
      },
    },
  })
  async findTodoById(
    @param.path.number('id') id: number,
    @param.query.boolean('items') items?: boolean,
  ): Promise<Todo> {
    return this.todoRepository.findById(id);
  }

  @get('/todos', {
    responses: {
      '200': {
        description: 'Array of Todo model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Todo)},
          },
        },
      },
    },
  })
  async findTodos(
    @param.filter(Todo)
    filter?: Filter<Todo>,
  ): Promise<Todo[]> {
    return this.todoRepository.find(filter);
  }

  @put('/todos/{id}', {
    responses: {
      '204': {
        description: 'Todo PUT success',
      },
    },
  })
  async replaceTodo(
    @param.path.number('id') id: number,
    @requestBody() todo: Todo,
  ): Promise<void> {
    await this.todoRepository.replaceById(id, todo);
  }

  @patch('/todos/{id}', {
    responses: {
      '204': {
        description: 'Todo PATCH success',
      },
    },
  })
  async updateTodo(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Todo, {partial: true}),
        },
      },
    })
    todo: Partial<Todo>,
  ): Promise<void> {
    await this.todoRepository.updateById(id, todo);
  }

  @del('/todos/{id}', {
    responses: {
      '204': {
        description: 'Todo DELETE success',
      },
    },
  })
  async deleteTodo(@param.path.number('id') id: number): Promise<void> {
    await this.todoRepository.deleteById(id);
  }
}
