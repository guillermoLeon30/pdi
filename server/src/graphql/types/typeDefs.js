const breakers_canales = require('../schemas/breakers_canales')
const breakerType = require('../schemas/breakerType')
const canalesType = require('../schemas/canaleType')
const clienteType = require('../schemas/clienteType')
const rackType = require('../schemas/rackType')
const pdiType = require('../schemas/pdiType')

module.exports = [
  breakers_canales.typeDef,
  breakerType.typeDef,
  canalesType.typeDef,
  clienteType.typeDef,
  rackType.typeDef,
  pdiType.typeDef
]
