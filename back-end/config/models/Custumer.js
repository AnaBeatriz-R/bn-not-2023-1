const mongoose = require('mongoose')


const schema = mongoose.Schema({
    name:{
        type: String,
        required: true //Campo obrigatorio 

    },
    phone: {
        type: String,
        required: false
    },
    id_document: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    // Subdocumento incorporado
    address: {
        street:{
            type: String,
            required: true
        },
        number: {
            type: String,
            required: true
        },
        complement: {
            type: String,
            required: false
        },
        district: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        zip_code: {
            type: String,
            required: false
        }
    }
})

/*
    Parametros de mongoose.model:
    1°: nome da model, para uso interno (convenção: primeira letra maiuscula e singular)
    2°: relação de campos do esquema (constanye esquema)
    3°: nome da collection no banco de dados (Convenção: mesmo nome do model mas com letra minuscula e no plural) 

*/

module.exports = mongoose.model('Costumer', schema, 'custumers')