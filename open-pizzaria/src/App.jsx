import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import "./Global.css"
function App() {

  return (
    <div className="container">

      <Header titleHeader="Bem-vindo à OpenPizzaria!"
      textHeader="As melhores pizzas, feitas com carinho especial para você!">
      </Header>

      <hr className="divider" />

      <Menu />

      <Banner />


      <Cards />


      <Menu />

      <Footer textFooter="Todos os direitos reservados - 2026" />
    </div>

  )
}

export default App
