const breakers_canales = require('../schemas/breakers_canales')
const breakerType = require('../schemas/breakerType')
const canalesType = require('../schemas/canaleType')
const clienteType = require('../schemas/clienteType')
const rackType = require('../schemas/rackType')
const pdiType = require('../schemas/pdiType')

let query = ''

breakers_canales.Query.forEach(q => {
  query = `${query}\n${q}`
})

breakerType.Query.forEach(q => {
  query = `${query}\n${q}`
})

canalesType.Query.forEach(q => {
  query = `${query}\n${q}`
})

clienteType.Query.forEach(q => {
  query = `${query}\n${q}`
})

rackType.Query.forEach(q => {
  query = `${query}\n${q}`
})

pdiType.Query.forEach(q => {
  query = `${query}\n${q}`
})

module.exports = `
  type Query {
    ${query}
  }
`
