import {bind, /* inject, */ BindingScope} from '@loopback/core';

import {UserService} from '@loopback/authentication';
import {repository} from '@loopback/repository';
import {HttpErrors} from '@loopback/rest';
import {securityId, UserProfile} from '@loopback/security';
import {compare} from 'bcryptjs';

import {
  Credentials,
  MyUserService,
  TokenServiceBindings,
  User,
  UserRepository,
  UserServiceBindings,
} from '@loopback/authentication-jwt';
import {debuglog} from "util";

//@bind({scope: BindingScope.TRANSIENT})
export class AppUserService implements UserService<User, Credentials> {
  constructor(
      @repository(UserRepository) public userRepository: UserRepository,
  ) {

    console.log("AppUserService created");

  }

  async verifyCredentials(credentials: Credentials): Promise<User> {
    const invalidCredentialsError = 'Invalid email or password.';

    const foundUser = await this.userRepository.findOne({
      where: {email: credentials.email},
    });
    if (!foundUser) {
      throw new HttpErrors.Unauthorized(invalidCredentialsError);
    }

    const credentialsFound = await this.userRepository.findCredentials(
        foundUser.id,
    );
    if (!credentialsFound) {
      throw new HttpErrors.Unauthorized(invalidCredentialsError);
    }

    const passwordMatched = await compare(
        credentials.password,
        credentialsFound.password,
    );

    if (!passwordMatched) {
      throw new HttpErrors.Unauthorized(invalidCredentialsError);
    }

    return foundUser;
  }

  async verifyEmailNotTaken(email: string): Promise<boolean> {
    console.log("testing");
    const invalidCredentialsError = 'email not availble.';

    const foundUser = await this.userRepository.findOne({
      where: {email: email},
    });
    if (!foundUser) {
      return  true
    }
    throw new HttpErrors.Unauthorized(invalidCredentialsError);

  }

  convertToUserProfile(user: User): UserProfile {
    return {
      [securityId]: user.id.toString(),
      name: user.username,
      id: user.id,
      email: user.email,
    };
  }
}