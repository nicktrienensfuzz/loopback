import { DefaultCrudRepository, Getter, HasOneRepositoryFactory } from '@loopback/repository';
import { AppUser, AppUserRelations } from '../models';
import { DbDataSource } from '../datasources';
import { UserCredentials } from "@loopback/authentication-jwt/src/models/user-credentials.model";
import { UserCredentialsRepository } from "@loopback/authentication-jwt/src/repositories/user-credentials.repository";
export declare class AppUserRepository extends DefaultCrudRepository<AppUser, typeof AppUser.prototype.id, AppUserRelations> {
    protected userCredentialsRepositoryGetter: Getter<UserCredentialsRepository>;
    readonly userCredentials: HasOneRepositoryFactory<UserCredentials, typeof AppUser.prototype.id>;
    constructor(dataSource: DbDataSource, userCredentialsRepositoryGetter: Getter<UserCredentialsRepository>);
    findCredentials(userId: typeof AppUser.prototype.id): Promise<UserCredentials | undefined>;
}
