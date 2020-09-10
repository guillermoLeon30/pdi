module.exports = {
  typeDef: `
    type Canal {
      id: ID!
      nombre: String!
      lado: String!
      pdi: Pdi!
    }
  `,
  Query: [
    'canales(id: ID, nombre: String, lado: String): [Canal]'
  ],
  Mutation: [
    'agregarCanal(nombre: String!, lado: String!, idPdi: Int!): Canal'
  ]
}
