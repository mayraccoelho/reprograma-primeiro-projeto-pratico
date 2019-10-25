const tarefas = require('../model/tarefas.json')

exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(tarefas)
}

exports.getById = (req, res) => {
    const id = req.params.id
    const buscarId = (tarefas.find(item => item.id == id))

    if (!buscarId) {
        res.redirect(301, "https://github.com/reprograma/CursoOnline-Aula3-Git-and-Github")
    }
    res.send(buscarId)
}

exports.getConcluidos = (req, res) => {
    const concluidos = (tarefas.filter(item => item.check == "true"))
    res.send(concluidos)
}

exports.getByNome = (req, res) => {
    const nome = req.params.nome
    const buscarNome = (tarefas.filter(item => item.nomeColaborador == nome))

    if (!buscarNome) {
        res.redirect(301, "https://github.com/reprograma/CursoOnline-Aula3-Git-and-Github")
    }
    res.send(buscarNome)
}