import express from 'express'

const app = express()

app.get('/teste', (request, response) => {
    return response.send('Acessou teste2')
})

app.listen(3333)