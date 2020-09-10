module.exports = {
  typeDef: `
    type Breaker {
      id: ID!
      codigo: String!
      polos: Int!
      ampacidad: String!
      marca: String!
      tipo_alimentador: String!
      calibre_alimentador: String!
      rack: Rack!
    }
  `,
  Query: [
    'breakers(id: ID, codigo: String, polos: String, ampacidad: String): [Breaker]'
  ],
  Mutation: [
    'agregarBreaker(codigo: String!, polos: Int!, ampacidad: String!, marca: String!, tipo_alimentador: String!, calibre_alimentador: String!, idRack: Int!): Breaker'    
  ]
}
