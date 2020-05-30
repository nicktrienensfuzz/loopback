import { DefaultCrudRepository } from '@loopback/repository';
import { AppUser, AppUserRelations } from '../models';
import { DbDataSource } from '../datasources';
export declare class AppUserRepository extends DefaultCrudRepository<AppUser, typeof AppUser.prototype.id, AppUserRelations> {
    constructor(dataSource: DbDataSource);
}
