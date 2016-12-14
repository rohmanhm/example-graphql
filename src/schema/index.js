import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLSchema
} from 'graphql';
import { Db } from '../models';

import {
  UserType,
  PostType
} from './type';

import UserSchema from './UserSchema';
import PostSchema from './PostSchema';

// Query default
const Query = new GraphQLObjectType({
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

const Schema = new GraphQLSchema({
  query: Query
});

export default Schema;
