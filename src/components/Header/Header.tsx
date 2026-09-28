import { FaArrowRightLong } from "react-icons/fa6";
import './Header.css';
import ActionLink from "../ActionLink/ActionLink";

export default function Header() {
  return (
    <header className="topbar">
      <ActionLink className="brand" href="#top" label="Ir para o início">
        <span className="brand-name">Natali Schers</span>
      </ActionLink>
      <nav aria-label="Navegação principal" className="nav-links">
        <ActionLink href="#about">Sobre Mim</ActionLink>
        <ActionLink href="#projects">Projetos</ActionLink>
        <ActionLink href="#experience">Experiência</ActionLink>
      </nav>
      <ActionLink className="header-cta" href="#contact">
        Vamos conversar
        <FaArrowRightLong />
      </ActionLink>
    </header>
  );
}
