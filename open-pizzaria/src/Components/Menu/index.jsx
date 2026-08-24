import "./Menu.css"

const Menu = (props) => {
    return (
        <>
            <nav className="menu">
                <ul>
                    <li
                    ><link to="/">Home</link>
                    </li>


                    <li>
                        <link to="/sobre">Sobre</link>
                    </li>


                    <li><a href="#">Cardápio</a></li>


                    <li>
                        <ul className="submenu">
                            <li>
                                <a href="#">Fale Conosco</a>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Menu