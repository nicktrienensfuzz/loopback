import { Entity } from '@loopback/repository';
export declare class AppUser extends Entity {
    name: string;
    id?: string;
    email: string;
    [prop: string]: any;
    constructor(data?: Partial<AppUser>);
}
export interface AppUserRelations {
}
export declare type AppUserWithRelations = AppUser & AppUserRelations;
