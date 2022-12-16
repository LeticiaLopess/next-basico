export default function questao(req, res) {
    if(req.method === "GET") {
        get(req, res)
    } else {
        req.status(405).send() // indica médodo não permitido, pois quero GET
    }
}

function get(req, res) {
        const id = req.query.id
        res.status(200).json({
            id,
            enunciado: 'Qual é a sua cor preferida?',
            respostas: [
                'Branca', 'Vermelha', 'Amarela', 'Verde'
            ]
        })
}