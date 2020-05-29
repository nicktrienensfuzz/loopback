// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/example-todo-jwt
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {authenticate, TokenService} from '@loopback/authentication';
import {Filter, repository} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody, RestBindings,
} from '@loopback/rest';
import {Task} from '../models';
import {TaskRepository} from '../repositories';
import {inject} from "@loopback/context";
import {Request} from "express";
import {MyUserService, TokenServiceBindings, User, UserServiceBindings} from "@loopback/authentication-jwt";
import {SecurityBindings, UserProfile} from "@loopback/security";

export class TaskController {
  constructor(
    @repository(TaskRepository) protected todoRepository: TaskRepository,
    @inject(RestBindings.Http.REQUEST) private req: Request,
    @inject(TokenServiceBindings.TOKEN_SERVICE) public jwtService: TokenService,
    @inject(UserServiceBindings.USER_SERVICE) public userService: MyUserService,
    @inject(SecurityBindings.USER, {optional: true}) public user: User,
  ) {}

  @post('/tasks', {
    responses: {
      '200': {
        description: 'Task model instance',
        content: {'application/json': {schema: getModelSchemaRef(Task)}},
      },
    },
  })
  @authenticate('jwt')
  async createTask(
      @requestBody({
        content: {
          'application/json': {
            schema: getModelSchemaRef(Task, {title: 'NewTask', exclude: ['id']}),
          },
        },
      })
          todo: Omit<Task, 'id'>,
      @inject(SecurityBindings.USER) currentUserProfile: UserProfile
  ): Promise<Task> {
    console.log("new item made")
    console.log(this.user)
    console.log(todo)
    //throw  currentUserProfile
    return this.todoRepository.create(todo)

  }

  @get('/tasks/{id}', {
    responses: {
      '200': {
        description: 'Task model instance',
        content: {'application/json': {schema: getModelSchemaRef(Task)}},
      },
    },
  })
  async findTaskById(
    @param.path.number('id') id: number,
    @param.query.boolean('items') items?: boolean,
  ): Promise<Task> {
    return this.todoRepository.findById(id);
  }

  @get('/tasks', {
    responses: {
      '200': {
        description: 'Array of Task model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Task)},
          },
        },
      },
    },
  })
  async findTasks(
    @param.filter(Task)
    filter?: Filter<Task>,
  ): Promise<Task[]> {
    return this.todoRepository.find(filter);
  }

  @put('/tasks/{id}', {
    responses: {
      '204': {
        description: 'Task PUT success',
      },
    },
  })
  async replaceTask(
    @param.path.number('id') id: number,
    @requestBody() todo: Task,
  ): Promise<void> {
    await this.todoRepository.replaceById(id, todo);
  }

  @patch('/tasks/{id}', {
    responses: {
      '204': {
        description: 'Task PATCH success',
      },
    },
  })
  async updateTask(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Task, {partial: true}),
        },
      },
    })
    todo: Partial<Task>,
  ): Promise<void> {
    await this.todoRepository.updateById(id, todo);
  }

  @del('/tasks/{id}', {
    responses: {
      '204': {
        description: 'Task DELETE success',
      },
    },
  })
  async deleteTask(@param.path.number('id') id: number): Promise<void> {
    await this.todoRepository.deleteById(id);
  }
}
