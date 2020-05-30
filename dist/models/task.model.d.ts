import { Entity } from '@loopback/repository';
export declare class Task extends Entity {
    id?: number;
    title: string;
    desc?: string;
    isComplete?: boolean;
    constructor(data?: Partial<Task>);
}
export interface TaskRelations {
}
export declare type TaskWithRelations = Task & TaskRelations;
