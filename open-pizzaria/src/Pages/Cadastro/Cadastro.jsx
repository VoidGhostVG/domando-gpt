import { useState } from 'react'
import './Cadastro.css'

export default function Cadastro() {

    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: ""
    })

    return (
        <main className="containerCadastro">
            <h1>Cadastro de usuários</h1>
            <form>
                <article className="form-control">
                    <label htmlFor="nome">Nome</label>
                    <input type="text"
                        id="nome"
                        name="nome"
                        placeholder="Digite seu nome" />
                        value={formData.nome}
                </article>
                <article className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                        id="email"
                        name="email"
                        placeholder="Digite seu email" />
                        value={formData.email}
                </article>
                <article className="form-control">
                    <label htmlFor="telefone">Telefone</label>
                    <input type="tel"
                        id="telefone"
                        name="telefone"
                        placeholder="Digite seu telefone" />
                        value={formData.telefone}
                </article>
                <button type="submit">Cadastrar</button>
            </form>

        </main>
    )
}
