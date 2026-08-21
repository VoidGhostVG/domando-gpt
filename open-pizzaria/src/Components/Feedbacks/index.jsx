import "./Feedbacks.css"
import estrela from "../../assets/star.png"

const Feedbacks = () => {
    return (
        <section className="Feedbacks">
            <article className="contentBack">
                <img src="https://fastly.picsum.photos/id/562/200/200.jpg?hmac=F4ylYRNFPH6rDzYo48_NUieJXXI2yaMl9ElwGeFQHZo" width="100px" height="100px" alt="user" />

                <h1>
                    Lorem Ipsum
                </h1>
                <img src={estrela} width="30" height="30" alt="Estrela" />
                <strong>5.0</strong>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </article>
        </section>
    )
};

export default Feedbacks

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
        nome: "Pedro Oliveira",
        imagem: "https://i.pravatar.cc/80?img=3",
        nota: 5.0,
        comentario:
            "Tudo perfeito desde o início até ao fim. Voltaria a utilizar este serviço sem dúvida."
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
        nome: "Ricardo Alves",
        imagem: "https://i.pravatar.cc/80?img=5",
        nota: 4.5,
        comentario:
            "Uma ótima experiência. A equipa foi bastante atenciosa e o resultado final ficou excelente."
    }
];

const FeedbackLIst = () => {

    console.log(FeedbackList)

    return (
        <section className="Feedbacks">
            {FeedbackList.map((feedback) =>
            <img
            src={feedback.imagem}
            width="80px"
            height="80px"
            alt={'foto de ${feedback.nome}'}
            />
            )}
        </section>
    )
}