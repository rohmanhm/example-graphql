const Resolver = {
  id: { resolve: post => post.id },
  title: { resolve: post => post.title },
  content: { resolve: post => post.content }
}

export default Resolver;
