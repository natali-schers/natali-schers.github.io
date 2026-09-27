import ActionLink from "../ActionLink/ActionLink";
import "./Hero.css";

const technologies = [
  "HTML",
  "CSS",
  "JS",
  "SQLServer",
  "C#",
  "Git",
  "React.JS",
];

export default function Hero() {
  return (
    <section className="hero">
      <h1>Natali Schers</h1>
      <h2>Desenvolvedora Full Stack</h2>

      <div className="actions">
        <ActionLink
          className="primary-button"
          href="mailto:natalischers@gmail.com"
          label="Enviar e-mail"
        >
          <span className="">Enviar E-mail</span>
        </ActionLink>

        <ActionLink className="secondary-button" href="#" label="Ver currículo" target="_blank">
          <span className="">Ver Currículo</span>
        </ActionLink>
      </div>

      <div className="badges">
        {technologies.map((technology) => (
          <span>{technology}</span>
        ))}
      </div>
    </section>
  );
}
