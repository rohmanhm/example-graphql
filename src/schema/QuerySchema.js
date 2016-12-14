import {
    GraphQLObjectType,
    GraphQLList
} from 'graphql';
import { Db } from '../models';
import {
  UserType,
  PostType
} from './type';

// Query default
const Schema = new GraphQLObjectType({
  name: 'Query',
  description: 'Query Root Schema',
  fields() {
    return {
      // query for user
      users: {
        type: new GraphQLList(UserSchema),
        args: UserType.getFields(),
        resolve(_, args) {
          return Db.models.user.findAll({
            where: args
          });
        }
      },
      // query for post
      posts: {
        type: new GraphQLList(PostSchema),
        args: PostType.getFields(),
        resolve(_, args) {
          return Db.models.post.findAll({
            where: args
          });
        }
      }

    }
  }
});

export default Schema;