import { TokenService } from '@loopback/authentication';
import { Filter } from '@loopback/repository';
import { Task } from '../models';
import { TaskRepository } from '../repositories';
import { Request } from "express";
import { MyUserService, User } from "@loopback/authentication-jwt";
import { UserProfile } from "@loopback/security";
export declare class TaskController {
    protected todoRepository: TaskRepository;
    private req;
    jwtService: TokenService;
    userService: MyUserService;
    user: User;
    constructor(todoRepository: TaskRepository, req: Request, jwtService: TokenService, userService: MyUserService, user: User);
    createTask(todo: Omit<Task, 'id'>, currentUserProfile: UserProfile): Promise<Task>;
    findTaskById(id: number, items?: boolean): Promise<Task>;
    findTasks(filter?: Filter<Task>): Promise<Task[]>;
    replaceTask(id: number, todo: Task): Promise<void>;
    updateTask(id: number, todo: Partial<Task>): Promise<void>;
    deleteTask(id: number): Promise<void>;
}
