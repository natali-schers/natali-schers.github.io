import ActionLink from "../ActionLink/ActionLink";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <span className="contact-kicker">
        Tem uma ideia em mente?
      </span>
      <h2 className="contact-title">
        Vamos criar algo
        <br />
        <span>incrível juntos!</span>
      </h2>
      <p>
        Estou sempre aberta a novos desafios e colaborações ;)
      </p>
      <ActionLink
        className="contact-button"
        href="mailto:natalischers@gmail.com"
      >
        natalischers@gmail.com
      </ActionLink>
    </section>
  );
}
