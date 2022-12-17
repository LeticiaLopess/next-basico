export function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

// nume função com esse nome o NEXT já detecta automaticamente que esse componente estático será um componente gerado de forma estática pelo NEXT e gerará um HTML baseado nesse componente. O HTML ficará disponível pra ser chamado sempre que necessário


export default function Estatico(props) {
    return (
        <div>
            <span>Aleatório: {props.numero}</span>
        </div>
    )
}