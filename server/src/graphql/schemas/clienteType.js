module.exports = {
  typeDef: `
    type Cliente {
      id: ID!
      codigo: String!
      empresa: String!
    }
  `,
  Query: [
    'clientes(codigo: String, empresa: String): [Cliente]',
    'cliente(id: ID!): Cliente'
  ],
  Mutation: [
    'agregarCliente(codigo: String!, empresa: String!): Cliente'
  ]
}