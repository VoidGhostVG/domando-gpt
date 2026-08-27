import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Users.css'

export default function Users() {
const [usuarios, setUsuarios] = useState([])

useEffect(() => {
console.log("Olá, mundo!")
}, [])

  return (
    <main className="containerUsers">
      <h1>Lista de Usuários</h1>
      <Link to="/">Voltar para Home</Link>
      <section className="contentUsers">
        <article>
          <strong>Nome: </strong> <span>Victor</span>
          <strong> Telefone: </strong> <span>(11) 97894-1717</span>
        </article>

      </section>
    </main>
  )
}
