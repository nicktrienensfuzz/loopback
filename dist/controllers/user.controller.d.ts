import { TokenService } from '@loopback/authentication';
import { Credentials, User } from '@loopback/authentication-jwt';
import { UserProfile } from '@loopback/security';
import { AppUserService } from "../services";
import { AppUser } from "../models";
import { AppUserRepository } from "../repositories";
export declare class NewUserRequest extends User {
    password: string;
}
export declare const CredentialsRequestBody: {
    description: string;
    required: boolean;
    content: {
        'application/json': {
            schema: {
                type: string;
                required: string[];
                properties: {
                    email: {
                        type: string;
                        format: string;
                    };
                    password: {
                        type: string;
                        minLength: number;
                    };
                };
            };
        };
    };
};
export declare class UserController {
    jwtService: TokenService;
    userService: AppUserService;
    user: UserProfile;
    protected userRepository: AppUserRepository;
    constructor(jwtService: TokenService, userService: AppUserService, user: UserProfile, userRepository: AppUserRepository);
    login(credentials: Credentials): Promise<{
        token: string;
    }>;
    me(currentUserProfile: UserProfile): Promise<User>;
    signUp(newUserRequest: Omit<NewUserRequest, 'id'>): Promise<AppUser>;
}
