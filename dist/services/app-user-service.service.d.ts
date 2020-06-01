import { UserService } from '@loopback/authentication';
import { UserProfile } from '@loopback/security';
import { Credentials, User, UserRepository } from '@loopback/authentication-jwt';
export declare class AppUserService implements UserService<User, Credentials> {
    userRepository: UserRepository;
    constructor(userRepository: UserRepository);
    verifyCredentials(credentials: Credentials): Promise<User>;
    verifyEmailNotTaken(email: string): Promise<boolean>;
    convertToUserProfile(user: User): UserProfile;
}
