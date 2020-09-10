const breakers_canales = require('../schemas/breakers_canales')
const breakerType = require('../schemas/breakerType')
const canalesType = require('../schemas/canaleType')
const clienteType = require('../schemas/clienteType')
const rackType = require('../schemas/rackType')
const pdiType = require('../schemas/pdiType')

let mutatios = ''

breakers_canales.Mutation.forEach(m => {
  mutatios = `${mutatios}\n${m}`
})

breakerType.Mutation.forEach(m => {
  mutatios = `${mutatios}\n${m}`
})

canalesType.Mutation.forEach(m => {
  mutatios = `${mutatios}\n${m}`
})

clienteType.Mutation.forEach(m => {
  mutatios = `${mutatios}\n${m}`
})

rackType.Mutation.forEach(m => {
  mutatios = `${mutatios}\n${m}`
})

pdiType.Mutation.forEach(m => {
  mutatios = `${mutatios}\n${m}`
})

module.exports = `
  type Query {
    ${mutatios}
  }
`
