export const schema = gql`
  type Post {
    id: String!
    title: String!
    body: String!
  }

  type Query {
    posts: [Post!]!
    post(id: String!): Post
  }

  input CreatePostInput {
    title: String!
    body: String!
  }

  input UpdatePostInput {
    title: String
    body: String
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post!
    updatePost(id: String!, input: UpdatePostInput!): Post!
    deletePost(id: String!): Post!
  }
`
