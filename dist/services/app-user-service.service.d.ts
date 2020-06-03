import { UserService } from '@loopback/authentication';
import { UserProfile } from '@loopback/security';
import { Credentials, User } from '@loopback/authentication-jwt';
import { AppUser } from "../models";
import { AppUserRepository } from "../repositories";
export declare class AppUserService implements UserService<AppUser, Credentials> {
    userRepository: AppUserRepository;
    constructor(userRepository: AppUserRepository);
    verifyCredentials(credentials: Credentials): Promise<AppUser>;
    verifyEmailNotTaken(email: string): Promise<boolean>;
    convertToUserProfile(user: User): UserProfile;
}
