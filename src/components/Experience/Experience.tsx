import SectionLabel from "../SectionLabel/SectionLabel";
import "./Experience.css";

const experiences = [
  {
    period: "11/2023 — Agora",
    role: "Desenvolvedora Junior",
    company: "Tecnologia Única",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam magna quam, vulputate ac consectetur vitae, imperdiet ac massa. ",
  },
  {
    period: "01/2023 — 10/2023",
    role: "Desenvolvedora Pré-Junior",
    company: "Tecnologia Única",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam magna quam, vulputate ac consectetur vitae, imperdiet ac massa. ",
  },
  {
    period: "07/2021 — 12/2022",
    role: "Estagiária",
    company: "Tecnologia Única",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam magna quam, vulputate ac consectetur vitae, imperdiet ac massa.",
  },
];

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <SectionLabel number="03">Experiência</SectionLabel>
      <div className="experience-layout">
        <div className="experience-intro">
          <p>
            Comecei minha jornada profissional em 2021, quando tive a oportunidade de estagiar na Tecnologia Única. Durante esse período, trabalhei em diversos projetos focada na manutenção de código legado, suporte e facelift de interfaces antigas, o que me proporcionou uma base sólida para minha carreira.

          </p>
          <br />
          <p>
            Em 2023, fui promovida a Desenvolvedora Jr e tive a oportunidade de me envolver em projetos mais complexos, onde pude aplicar meus conhecimentos em desenvolvimento, colaborar com a refatoração de código e contribuir com a documentação de features. Essa experiência tem me permitido aprimorar minhas habilidades técnicas e de comunicação, além de me preparar para enfrentar novos desafios na área de desenvolvimento.

          </p>
        </div>
        <div className="timeline">
          {experiences.map((item) => (
            <article className="timeline-item" key={item.role}>
              <span className="timeline-period">{item.period}</span>
              <div>
                <h3>{item.role}</h3>
                <span className="company">{item.company}</span>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
