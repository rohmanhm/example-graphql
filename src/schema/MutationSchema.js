import {
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLID
} from 'graphql';
import { Db } from '../models';
import {
  UserType,
  PostType
} from './type';
import UserSchema from './UserSchema';
import WhereUserType from './type/WhereUserType';
import UpdateUserType from './type/UpdateUserType';
import _ from 'lodash';

// Arguments for addUser Mutation
const addUserArgs = () => {
  const protectedFields = ['id'];
  const args = _.omit(UserType.getFields(), protectedFields);

  return args;
};

export default new GraphQLObjectType({
  name: "Mutation",
  description: "Mutation schema",
  fields() {
    return {
      // Add user
      addUser: {
        type: UserSchema,
        args: addUserArgs(),
        resolve(__, args){
          let fields = _.mapValues(args, (v, k) => {
            return args[k];
          });

          let tahu = Db.models.user.create(fields);
          console.log(tahu);
          return tahu;
        }
      },
      // Update a user
      updateUser: {
        type: UserSchema,
        args: {
          value: { type: UpdateUserType },
          where: { type: WhereUserType }
        },
        resolve(__, args) {
          let fields = _.mapValues(args.value, (v, k) => {
            return args.value[k];
          });

          return Db.models.user.update(fields, {
            where: args.where,
            returning: true,
            plain: true
          }).then(([affectedCount, affectedRows]) => {
            return affectedRows;
          });

        }
      },
      // Delete user
      deleteUser: {
        type: UserSchema,
        args: {
          id: {
            type: GraphQLID
          },
          email: {
            type: GraphQLString
          }
        },
        resolve(__, args) {
          let fields = _.mapValues(args, (v, k) => {
            return args[k];
          });

          return Db.models.user.destroy({
            where: fields
          }).then((result) => {
            return result;
          });
        }
      }

    };
  }
});
