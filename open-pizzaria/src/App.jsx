import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Router from "./Routes";
import "./Global.css"
function App() {

  return (
    <div className="container">

      <Header titleHeader="Bem-vindo à OpenPizzaria!"
        textHeader="As melhores pizzas, feitas com carinho especial para você!">
      </Header>


      <hr className="divider" />


      <Router />


      


      <Footer textFooter="Todos os direitos reservados - 2026" />
    </div>

  )
}

export default App
