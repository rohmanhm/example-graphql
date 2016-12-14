const Resolver = {
  id: { resolve: user => user.id },
  firstName: { resolve: user => user.firstName },
  lastName: { resolve: user => user.lastName },
  email: { resolve: user => user.email },
  address: { resolve: user => user.address }
}

export default Resolver;
