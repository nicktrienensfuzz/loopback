/// <reference types="express" />
import { TokenService } from '@loopback/authentication';
import { Filter } from '@loopback/repository';
import { Request } from '@loopback/rest';
import { MyUserService, User } from '@loopback/authentication-jwt';
import { Todo } from '../models';
import { TodoRepository } from '../repositories';
import { UserProfile } from "@loopback/security";
export declare class TodoController {
    private req;
    protected todoRepository: TodoRepository;
    jwtService: TokenService;
    userService: MyUserService;
    user: User;
    constructor(req: Request, todoRepository: TodoRepository, jwtService: TokenService, userService: MyUserService, user: User);
    createTodo(todo: Omit<Todo, 'id'>, currentUserProfile: UserProfile): Promise<Todo>;
    findTodoById(id: number, items?: boolean): Promise<Todo>;
    findTodos(filter?: Filter<Todo>): Promise<Todo[]>;
    replaceTodo(id: number, todo: Todo): Promise<void>;
    updateTodo(id: number, todo: Partial<Todo>): Promise<void>;
    deleteTodo(id: number): Promise<void>;
}
