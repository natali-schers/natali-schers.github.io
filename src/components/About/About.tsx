import "./About.css";
import SectionLabel from "../SectionLabel/SectionLabel";

export default function About() {
  return (
    <section className="about section" id="about">
      <div>
        <div>
          <SectionLabel number="01">Sobre mim</SectionLabel>
        </div>
        <div className="about-layout">
          <img
            src="https://natali-schers.github.io/images/natali-schers.png"
            className="profile-picture"
          />
          <div className="about-copy">
            <p>
              Olá, eu sou Natali Schers, desenvolvedora front-end com foco em
              unir design e código para criar interfaces consistentes e fáceis
              de manter. Com formação em Web Design e experiência com React.js,
              Next.js e .NET C#, trabalho de perto com times de design e
              back-end para garantir que o que foi pensado no Figma funcione bem
              em qualquer navegador e dispositivo.
            </p>
            <p>
              Há 5 anos atuo no desenvolvimento de e-commerces, portais de
              atendimento e plataformas de gamificação, sempre equilibrando as
              necessidades do cliente com um código limpo, estável e pronto para
              crescer. Meu trabalho vai além do desenvolvimento: mantenho a
              documentação atualizada e acompanho as atividades até a publicação
              em produção.
            </p>
            <p>
              Fora do código, estudo ilustração digital e me dedico ao aprendizado de
              idiomas, principalmente inglês. Quando sobra um tempinho livre,
              gosto de explorar tecnologias com as quais tive menos contato,
              como Flutter (usado no meu projeto Divider) e React Native (usado
              em projetos da faculdade, como o Ground Control e o Flui).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
