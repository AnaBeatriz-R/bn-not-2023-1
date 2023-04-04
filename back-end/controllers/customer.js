const Customer = require('../models/Customer')

const controller = {}  // Objeto vazio

controller.create = async(req, res) => {
    try {
        // Manda as informações que vieram em req.body
        // para serem gravadas no banco de dados 
        await Customer.create(req.body)

        //HTTP 201: Created
        res.status(201).end()
    }
    catch(error) {
        console.error(error)
        // HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

controller.retrieve = async (req, res) => {
    try{
        //Retorna todos os documentos da coleção
        const result = Customer.find()

        res.send(result)
    }
    catch(error) {
        console.error(error)
        // HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

controller.retrieve = async(req, res) => {
    try{
        const result = await Customer.findById(req, params.id)

        if(result){
            res.send(result)
        }
    }
    catch(error) {
        console.error(error)
        res.status(500).send(error)
    }
}
controller.update = async(req, res) => {
    try{
        const result = Customer.findByIdAndUpdate(req, params.id, req.body)

        if(result){
            res.status(204).end()
        }else{
            
        }
    
}
module.exports = controller