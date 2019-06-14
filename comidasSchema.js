const mongoose = require("mongoose");

//cada Schema equivale collection

const Schema = mongoose.Schema;
const ComidasSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    nome: { type: String, required: true },
    descricao: { type: String, required: true }, //opcional
    image: { type: String,required: true} 
})

const comidasModel = mongoose.model("comidas", ComidasSchema);

module.exports = comidasModel;