const mongoose = require('mongoose')

/*
    Usa desestruturação para obter as variaveis de 
    ambiente necessarias para realizar a conexão ao 
    banco de dados
*/

const {
    MONGODB_USER,
    MONGODB_PASS,
    MONGODB_SERVER,
    MONGODB_DATABASE
} = process.env

module.exports = function(){
    
    //Conecta ao banco de dados
    mongoose.connect(`mongodb+srv://${MONGODB_USER}:${MONGODB_PASS}@${MONGODB_SERVER}/${MONGODB_DATABASE}?retryWrites=true&w=majority`, {
        useNewUrParser: true,
        useUnifiedTopology: true
    })

    mongoose.connection.on('connect',() =>
        console.log('=> MONGOOSE! conectado com sucesso no servirdor!')
    )

    mongoose.connection.on('diconnected', () =>
        console.log('=> MONGOOSE! desconectado do servidor')
    )

    mongoose.connection.on('error', () =>
        console.log('** MONGOOSE! ERRO ao se conectar no servidor' + error)
    )

    //Quando for detectado o comando de interrupção Ctrl+C
    process.on('SIGINT', () => {
            console.log('=> MONGOOSE! desconectado...')
            mongoose.connection.close()
            process.exit()
        
    })
}

