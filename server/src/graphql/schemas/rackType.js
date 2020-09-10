module.exports = {
  typeDef: `
    type Rack {
      id: ID!
      coordenada: String!
      nombre: String!
      cliente: Cliente!
    }
  `,
  Query: [
    'racks(coordenada: String, nombre: String): [Rack]',
    'rack(id: ID!): Rack'
  ],
  Mutation: [
    'agregarRack(coordenada: String!, nombre: String!, idCliente: Int!): Rack'
  ]
}
