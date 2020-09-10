module.exports = {
  typeDef: `
    type Pdi {
    id: ID!
    nombre: String!
    potencia: String
  }
  `,
  Query: [
    'pdis(id: ID, nombre: String, potencia: String): [Pdi]'
  ],
  Mutation: [
    'agregarPdi(nombre: !String, potencia: !String): Pdi'
  ]
}
