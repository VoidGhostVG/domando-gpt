import "./Feedbacks.css"
import estrela from "../../assets/star.png"
import Dan from "../../assets/DanGostoso.jpg"


const FeedbackList = [
  {
    id: 1,
    nome: "João Silva",
    imagem: "https://i.pravatar.cc/80?img=1",
    nota: 5.0,
    comentario:
      "Excelente serviço! Fiquei muito satisfeito com o resultado. Recomendo a todos."
  },
  {
    id: 2,
    nome: "Maria Santos",
    imagem: "https://i.pravatar.cc/80?img=2",
    nota: 4.5,
    comentario:
      "Gostei bastante da experiência. O atendimento foi rápido e muito profissional."
  },
  {
    id: 3,
    nome: "Dan Gostoso",
    imagem: Dan,
    nota: 5.0,
    comentario:
      "Me deram uma comida muito boa, vou voltar todos os dias!"
  },
  {
    id: 4,
    nome: "Ana Costa",
    imagem: "https://i.pravatar.cc/80?img=4",
    nota: 4.0,
    comentario:
      "Muito bom! O resultado ficou exatamente como eu esperava. Apenas demorou um pouco mais do que previsto."
  },
  {
    id: 5,
    nome: "Elma Maria",
    imagem: "https://i.pravatar.cc/80?img=5",
    nota: 4.5,
    comentario:
      "Uma ótima experiência. A equipe foi bastante atenciosa e o resultado final ficou excelente."
  }
];

const Feedbacks = () => {

  console.log(FeedbackList)

  return (
    <section className="Feedbacks">

      {FeedbackList.map((feedback) =>
        <article className="contentBack">
          <img
            src={feedback.imagem}
            width={(80)}
            height={(80)}
            alt={'foto de ${feedback.nome}'}


          />
          <h1>{feedback.nome}</h1>
          <img src={estrela} width="30px"
            height="30px"
            alt="estrela" />


          <strong>
            {feedback.nota}
          </strong>

          <p>
            {feedback.comentario}
          </p>

        </article>


      )}

    </section>


    // <section className="Feedbacks">
    //   <article className="contentBack">
    //     <img src="https://fastly.picsum.photos/id/562/200/200.jpg?hmac=F4ylYRNFPH6rDzYo48_NUieJXXI2yaMl9ElwGeFQHZo" width="100px" height="100px" alt="user" />
    //     <h1>

    //     lorem ipsum

    //     </h1>
    //     <img src={estrela} width="30px" height="30px" alt="stars" />
    //     <strong> 5.0</strong>
    //   <p>
    //     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    //    </p>
    //   </article>
    // </section>
  )
}

export default Feedbacks