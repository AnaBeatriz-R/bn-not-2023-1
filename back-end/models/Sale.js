const mongoose = require('mongoose')


const schema = mongoose.Schema({
    datetime: {
        type: Date,
        required: true,
        default: Date.now()
    },
    number: {
        type: Number,
        required: true
    },
    customer:{
        type: mongoose.ObjectId, //Tipo para chave estrangeira
        ref: 'Customer',         // model estrangeira 
        required: true
    }
})

/*
    Parametros de mongoose.model:
    1°: nome da model, para uso interno (convenção: primeira letra maiuscula e singular)
    2°: relação de campos do esquema (constanye esquema)
    3°: nome da collection no banco de dados (Convenção: mesmo nome do model mas com letra minuscula e no plural) 

*/

module.exports = mongoose.model('Sale', schema, 'sales')