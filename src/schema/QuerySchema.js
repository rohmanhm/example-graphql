import {
    GraphQLObjectType,
    GraphQLList
} from 'graphql';
import { Db } from '../models';
import {
  UserType,
  PostType
} from './type';
import UserSchema from './UserSchema';
import PostSchema from './PostSchema';

// Query default
export default new GraphQLObjectType({
  name: 'Query',
  description: 'Query Root Schema',
  fields() {
    return {
      // query for user
      users: {
        type: new GraphQLList(UserSchema),
        args: UserType.getFields(),
        resolve(__, args) {
          return Db.models.user.findAll({
            where: args
          });
        }
      },
      // query for post
      posts: {
        type: new GraphQLList(PostSchema),
        args: PostType.getFields(),
        resolve(__, args) {
          return Db.models.post.findAll({
            where: args
          });
        }
      }

    }
  }
});
