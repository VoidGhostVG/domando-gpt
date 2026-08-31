
import { Link } from "react-router-dom"
import "./Menu.css"

const Menu = (props) => {
    return (
        <>
            <nav className="menu">
                <ul>
                    <li
                    ><Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>

                    <li>
                        <Link to="/cadastro">Cadastro</Link>
                    </li>

                    <li>
                        <Link to="/users">Usuários</Link>
                    </li>

                    <li>
                        <Link to="/cardapio">Cardápio</Link></li>
                    <li>
                        <ul className="submenu">
                            <li>
                                <Link to="/contato">Fale Conosco</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/faq">FAQ</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Menu