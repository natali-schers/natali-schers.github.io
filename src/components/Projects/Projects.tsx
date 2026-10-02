import ActionLink from "../ActionLink/ActionLink";
import SectionLabel from "../SectionLabel/SectionLabel";
import './Projects.css';

const projects = [
  {
    number: "01",
    category: "E-commerce",
    title: "ReUse",
    description:
      "Projeto de troca de itens usados desenvolvido como atividade avaliativa da graduação em Web Design da FIAP, com o objetivo de replicar uma plataforma que já existe na versão mobile para a versão web mantendo a mesma identidade visual e experiência do usuário.",
    stack: ["Next.js"],
    tone: "#edf7c9",
    repository: "https://github.com/natali-schers/reuse-web",
    imageName: "reuse.png",
  },
  {
    number: "02",
    category: "Guia de Carreira - Projeto em Grupo",
    title: "SinergIA",
    description:
      "O SinergIA foi desenvolvido para o desafio do Global Solution de 2025 da FIAP, com o objetivo de se tornar uma plataforma que auxilia jovens a conquistar a primeira oportunidade profissional e se destacar em entrevistas. O projeto foi desenvolvido em React, foi publicado na Vercel e faz integração com a OpenAI API para tornar a experiência do usuário mais personalizada e interativa.",
    stack: ["React.js", "OpenAI API"],
    tone: "#faefda",
    repository: "https://github.com/fiap-webdesign/global-solution-sinergia",
    imageName: "sinergia.png",
  },
];

export default function Projects() {
    return (
        <section className="projects section" id="projects">
          <div className="section-top">
            <div>
              <SectionLabel number="02">Projetos em Destaque</SectionLabel>
            </div>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className={`project-visual`} style={{ backgroundColor: project.tone }}>
                    <img src={`../${project.imageName}`} alt={project.title} />
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