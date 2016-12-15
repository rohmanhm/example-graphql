import {
  GraphQLInputObjectType
} from 'graphql';
import UserType from './UserType';
import _ from 'lodash';

export default new GraphQLInputObjectType({
  name: 'UpdateUserType',
  description: 'Make a new Input Object Type Value for updateUser mutation',
  fields() {
    const fields = UserType.getFields();
    const protectedFields = ['id'];

    return _.omit(fields, protectedFields);
  }
});
