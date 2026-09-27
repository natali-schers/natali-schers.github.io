import { createElement, type ReactNode } from "react";

export default function ActionLink({
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