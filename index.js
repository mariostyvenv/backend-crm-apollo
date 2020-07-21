require('dotenv').config({path:'variables.env'})
const {ApolloServer, PubSub} = require('apollo-server')
const typeDefs = require('./db/schema')
const resolvers = require('./db/resolvers')
const conectarDB = require('./config/db')
const jwt = require('jsonwebtoken')

conectarDB()
const pubsub = new PubSub()

const server = new ApolloServer({
    typeDefs, 
    resolvers,
    context: ({req}) => {

        if(req)
        {
            const token = req.headers['authorization'] || ''
            if(token)
            {
                try {
                    const usuario = jwt.verify(token, process.env.SECRETA)
                    return {
                        usuario,
                        pubsub
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        }
        else
        {
            return {
                pubsub
            }    
        }
    }
})

server.listen().then(({url}) => {
    console.log(`Servidor listo en la URL ${url}`)
})