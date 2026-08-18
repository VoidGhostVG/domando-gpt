import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Cards from "./Components/Cards";
import "./Global.css"
function App() {

  return (
    <div className="container">
      
    <header className="header">
    <div className="header-content">
        <span className="pizza-icon">🍕</span>

        <h1>Bem-vindo à OpenPizzaria!</h1>

        <p>
            As melhores pizzas, feitas com carinho e ingredientes selecionados.
            Escolha seu sabor favorito e aproveite!
        </p>
    </div>
</header>

<hr className="divider" />


      <Banner />


      <Cards />


    </div>

  )
}

export default App
