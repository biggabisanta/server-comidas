const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const controller = require('./ComidasController')

const servidor = express()
servidor.use(cors())
servidor.use(bodyParser.json())

servidor.get('/comidas', async (request, response) => {
  controller.getAll()
    .then(comidas => response.send(comidas))
})

servidor.get('/comidas/:id', (request, response) => {
  const id = request.params.id
  controller.getById(id)
    .then(comida => response.send(comida))
})

servidor.post('/comidas', (request, response) => {
  response.status(200).send(controller.add(request.body))
})

servidor.delete('/comidas/:id', (request, response) => {
  controller.remove(request.params.id)
  response.sendStatus(204)
})
servidor.patch('/comidas/:id', async (request, response) => {
  const id = request.params.id
  controller.update(id, request.body)
    .then(response.sendStatus(204))

  if (sucesso) {
    response.sendStatus(204)

  } else {
    response.sendStatus(404)
  }
})


servidor.listen(3000)
console.log("servidorzinho rodando na porta 3000")
