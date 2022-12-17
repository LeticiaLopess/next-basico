import { useEffect } from "react"
import { useState } from "react"

export default function Questao() {
    const [questao, setQuestao] = useState()
    
    useEffect(() => {
        fetch('http://localhost:3000/api/questao/123')
    .then(resp => resp.json())
    .then(setQuestao)
    }, [])

    function renderizarRespostas() {
        if(questao) {
            return questao.respostas.map((resp, i) => {
                return <li key={i}>{resp}</li>
            })
        }
        return false
    }

    return (
        <div>
            <h1>Questão</h1>
            <div>
                <span>{questao?.id} - {questao?.enunciado}</span>
            </div>
            <ul>
                {renderizarRespostas()}
            </ul>
        </div>
    )
}