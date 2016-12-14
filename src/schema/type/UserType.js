import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID
} from 'graphql';

export let fields = {
  id: { type: GraphQLID },
  firstName: { type: GraphQLString },
  lastName: { type: GraphQLString },
  email: { type: GraphQLString },
  address: { type: GraphQLString }
};

const InputType = new GraphQLInputObjectType({
  name: 'UserType',
  description: 'User Schema Type',
  fields: () => fields
});

export default InputType;
