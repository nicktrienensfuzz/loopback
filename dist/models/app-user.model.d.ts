import { User } from "@loopback/authentication-jwt";
export declare enum Role {
    admin = "admin",
    viewer = "viewer",
    kiosk = "kiosk"
}
export declare class AppUser extends User {
    name: string;
    role: string;
    [prop: string]: any;
    constructor(data?: Partial<AppUser>);
}
export interface AppUserRelations {
}
export declare type AppUserWithRelations = AppUser & AppUserRelations;
