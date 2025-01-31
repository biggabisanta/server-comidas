const { connect } = require('./ComidasRepository')
const comidasModel = require('./comidasSchema')

connect() //para conectar no mongoDB

const getAll = async () => {
  return comidasModel.find((error, comidas) => {
    if (error) {
      console.error(error)
    }
    return comidas
  })

}

const getById = (id) => {
  return comidasModel.findById(id)
}

  //const comidaCadastrada = getAll().find(comida => {
  // return comida.id === id
  // })
  //return comidaCadastrada

// TODO: usar o mongoose para inserir uma nova comida
const add = (comida) => {
  const novaComida = new comidasModel({
    nome: comida.nome,
    descricao: comida.descricao,
    image: comida.image
  })
  return novaComida.save()
}
 
const remove = (id) => {
  return comidasModel.findByIdAndDelete(id)
}

const update = async (id, comida) => {
  comidasModel.findByIdAndUpdate(
    id,
    { $set: comida },
    { new: true }, //retonar a comida já atualizada no callback
    function (error, comida) { // é o nosso callback
      return comida
    }
  )
  //   let comidaCadastrada = getAll().find(comida => {
  //     return comida.id === id
  //   })
  //   if (comida.nome !== undefined) {
  //     comidaCadastrada.nome = comida.nome
  //   }
  //   if (comida.descricao !== undefined) {
  //     comidaCadastrada.descricao = comida.descricao
  //   }
  //   return true 
}

module.exports = {
  getAll,
  add,
  remove,
  update,
  getById
}