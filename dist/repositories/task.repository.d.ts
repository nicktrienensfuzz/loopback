import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Task, TaskRelations } from '../models';
export declare class TaskRepository extends DefaultCrudRepository<Task, typeof Task.prototype.id, TaskRelations> {
    constructor(dataSource: juggler.DataSource);
}
