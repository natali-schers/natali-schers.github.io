import { type ReactNode, createElement } from "react";
import './Footer.css';
import { GrLinkedinOption } from "react-icons/gr";
import { IoMdMail } from "react-icons/io";
import { TbBrandGithubFilled } from "react-icons/tb";

function ActionLink({
  href,
  className = "",
  children,
  label,
  target = ""
}: {
  href: string;
  className?: string;
  children: ReactNode;
  label?: string;
  target?: string;
}) {
  return createElement(
    "a",
    { href, className, "aria-label": label, target },
    children,
  );
}

export default function Footer() {
  return (
    <footer>
      <ActionLink className="brand footer-brand" href="#top">
        <span className="brand-name">Natali Schers</span>
      </ActionLink>
      <div className="social-links">
        <ActionLink href="https://github.com/natali-schers" label="GitHub" target="_blank">
          <TbBrandGithubFilled />
        </ActionLink>
        <ActionLink href="https://www.linkedin.com/in/natali-schers/" label="LinkedIn" target="_blank">
          <GrLinkedinOption />
        </ActionLink>
        <ActionLink href="mailto:natalischers@gmail.com" label="E-mail">
          <IoMdMail />
        </ActionLink>
      </div>
    </footer>
  );
}
