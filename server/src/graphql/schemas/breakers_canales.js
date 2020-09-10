module.exports = {
  typeDef: `
    type breaker_canales {
      id: ID!
      canales: [Canal]!
      breakers: [Breaker]!
    }
  `,
  Query:[
    'breakers_canales(idBreaker: Int, idCanal: Int): breaker_canales'
  ],
  Mutation: []
}
