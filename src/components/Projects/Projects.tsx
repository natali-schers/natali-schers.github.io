import ActionLink from "../ActionLink/ActionLink";
import SectionLabel from "../SectionLabel/SectionLabel";
import './Projects.css';

const projects = [
  {
    number: "01",
    category: "E-commerce",
    title: "ReUse",
    description:
      "Projeto de troca de itens usados desenvolvido como atividade avaliativa da graduação em Web Design da FIAP",
    stack: ["Next.JS"],
    tone: "#d5d1ff",
    repository: "https://github.com/natali-schers/reuse-web",
  },
];

export default function Projects() {
    return (
        <section className="projects section" id="projects">
          <div className="section-top">
            <div>
              <SectionLabel number="02">Projetos</SectionLabel>
            </div>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className={`project-visual`}>
                    <img src="../reuse.png"/>
                </div>
                <div className="project-info">
                  <h4 className="subtitle">{project.category}</h4>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="stack-list">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <ActionLink className="secondary-button" href={project.repository} target="_blank">
                    Acessar repositório no GitHub
                  </ActionLink>
                </div>
              </article>
            ))}
          </div>
        </section>
    );
};