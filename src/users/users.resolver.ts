import { Query, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UsesrService } from './users.service';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly usersService: UsesrService) {}

  @Query((returns) => Boolean)
  hi() {
    return true;
  }
}
