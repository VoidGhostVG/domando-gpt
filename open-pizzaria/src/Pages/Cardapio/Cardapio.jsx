import React from "react";
import "./Cardapio.css";

const PizzasSalgadas = [
  {
    nome: "Margherita",
    descricao: "Molho de tomate, muçarela, manjericão e azeite.",
    preco: "R$ 39,90",
  },
  {
    nome: "Calabresa",
    descricao: "Molho de tomate, calabresa e cebola.",
    preco: "R$ 42,90",
  },
  {
    nome: "Frango com Catupiry",
    descricao: "Frango desfiado e catupiry cremoso.",
    preco: "R$ 44,90",
  },
  {
    nome: "Portuguesa",
    descricao: "Molho de tomate, presunto, ovos, cebola, ervilha, milho e muçarela.",
    preco: "R$ 46,90",
  },
  {
    nome: "Quatro Queijos",
    descricao: "Molho de tomate, muçarela, provolone, parmesão e gorgonzola.",
    preco: "R$ 47,90",
  },
  {
    nome: "Toscana",
    descricao: "Molho de tomate, muçarela, calabresa e cebola.",
    preco: "R$ 45,90",
  },
];

const PizzasDoces = [
  {
    nome: "Chocolate",
    descricao: "Chocolate cremoso, morangos e leite condensado.",
    preco: "R$ 34,90",
  },
  {
    nome: "Banana com Canela",
    descricao: "Banana, açúcar, canela e leite condensado.",
    preco: "R$ 32,90",
  },
];

const Bebidas = [
  {
    nome: "Refrigerante Lata",
    descricao: "Coca-Cola, Guaraná ou Fanta — 350 ml.",
    preco: "R$ 6,00",
  },
  {
    nome: "Suco Natural",
    descricao: "Laranja, maracujá ou abacaxi — 500 ml.",
    preco: "R$ 9,90",
  },
  {
    nome: "Água Mineral",
    descricao: "Água mineral sem gás — 500 ml.",
    preco: "R$ 4,00",
  },
];

function CardProduto({ produto }) {
  return (
    <article className="pizza-card">
      <div className="pizza-card-conteudo">
        <h3>{produto.nome}</h3>

        <p>{produto.descricao}</p>

        <div className="pizza-card-footer">
          <strong>{produto.preco}</strong>

          <button type="button">
            Pedir
          </button>
        </div>
      </div>
    </article>
  );
}

function Categoria({ titulo, produtos }) {
  return (
    <section className="pizza-categoria">
      <h2>{titulo}</h2>

      <div className="pizza-grid">
        {produtos.map((produto) => (
          <CardProduto
            key={produto.nome}
            produto={produto}
          />
        ))}
      </div>
    </section>
  );
}

export default function Cardapio() {
  return (
    <div className="pizza-cardapio">

      <header className="pizza-header">
        <span>SABOR ARTESANAL</span>

        <h1>
          Nosso <b>Cardápio</b>
        </h1>

        <p>
          Pizzas artesanais feitas com ingredientes
          selecionados e muito sabor.
        </p>
      </header>

      <main className="pizza-main">

        <Categoria
          titulo="Pizzas Salgadas"
          produtos={PizzasSalgadas}
        />

        <Categoria
          titulo="Pizzas Doces"
          produtos={PizzasDoces}
        />

        <Categoria
          titulo="Bebidas"
          produtos={Bebidas}
        />

      </main>

      <footer className="pizza-footer">
        © 2026 — OpenPizzaria
      </footer>

    </div>
  );
}