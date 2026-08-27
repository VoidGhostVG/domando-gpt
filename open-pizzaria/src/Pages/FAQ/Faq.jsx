import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Faq.css'


export default function Faq() {
    const [mensagens, setMensagens] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/users")
            .then(response => response.json())
            .then(data => setMensagens(data))
            .catch(error => console.error("Erro na API", error))
    }, [])

    console.log(mensagens)

    return (
        < main className="containerFaq" >
            <h1>Comentários</h1>
            <Link to="/">Voltar para Home</Link>

            <section className="contentFaq">
                {mensagens.map(message => (
                    <article key={message.id}>
                        <strong>Nome: </strong> <span>{message.nome}</span>
                        <strong>Email: </strong> <span>{message.email}</span>
                        <strong> Mensagem: </strong> <span>{message.mensagem}</span>
                    </article>
                ))}
            </section>
        </main >
    )
}
