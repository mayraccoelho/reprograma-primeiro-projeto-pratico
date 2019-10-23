// configuracao da aplicacao 
// porta,listen (escutar)

const app = require('./src/app')
// const debug = require('debug')('nodestr:server');


const port = 3000

//Sempre que encontrar a / sem nenhum domínio ele vai puxar a função
app.listen(port, function(){
    console.log(`{msg do server} rodando na porta ${port}`)
})