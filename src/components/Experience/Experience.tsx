import SectionLabel from "../SectionLabel/SectionLabel";
import "./Experience.css";

const experiences = [
  {
    period: "11/2023 — Agora",
    role: "Desenvolvedora Júnior",
    company: "Tecnologia Única",
    description:
      "Participo do refinamento de novos projetos, alinhando design, back-end e negócios antes do desenvolvimento para que o front-end comece com requisitos claros e sem retrabalho.",
  },
  {
    period: "01/2023 — 10/2023",
    role: "Desenvolvedora Pré-Júnior",
    company: "Tecnologia Única",
    description:
      "Atuei na refatoração de código defasado e na modernização de interfaces antigas, deixando as telas mais consistentes e fáceis de manter. Foi nessa fase que o front-end se tornou meu foco.",
  },
  {
    period: "07/2021 — 12/2022",
    role: "Estagiária",
    company: "Tecnologia Única",
    description:
      "Atuei na sustentação de sistemas legados, corrigindo bugs e evoluindo código existente sem comprometer o que já estava funcionando em produção.",
  },
];

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <SectionLabel number="03">Experiência</SectionLabel>
      <div className="experience-layout">
        <div className="experience-intro">
          <p>
            Comecei minha trajetória profissional em 2021, como estagiária na
            Tecnologia Única, atuando na sustentação de sistemas e na manutenção
            de código legado. Essa fase me deu uma base sólida para entender
            como um sistema funciona por dentro e como evoluí-lo com segurança.
          </p>
          <br />
          <p>
            Em 2023, fui promovida a Desenvolvedora Júnior e passei a atuar em
            projetos mais complexos, a assumir mais responsabilidades e a
            participar de decisões estratégicas. Hoje, essa experiência me
            permite aprimorar tanto minhas habilidades técnicas quanto a
            comunicação com os times de design, back-end e negócios.
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
