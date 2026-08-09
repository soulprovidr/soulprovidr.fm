import { LiveText } from "@components/ui/LiveText";
import { Link, useLocation } from "@tanstack/react-router";
import cx from "classnames";
import { HTMLAttributes, ReactNode } from "react";
import css from "./Header.module.scss";

interface INavLinkProps {
  children: ReactNode;
  href: string;
}

const NavLink = ({ children, href }: INavLinkProps) => {
  const { pathname } = useLocation();
  return (
    <li className={pathname === href ? css.active : ""}>
      <Link to={href}>{children}</Link>
    </li>
  );
};

export const Header = ({ className, ...rest }: HTMLAttributes<HTMLElement>) => (
  <header className={cx(css.header, className)} {...rest}>
    <div>
      <div className={css.logo}>
        <Link to="/">
          <img alt="" src="/logo.png" />
          <span>Soul Provider</span>
        </Link>
      </div>
    </div>
    <nav className={css.navigation}>
      <ul>
        <LiveText as={NavLink} href="/" />
        <NavLink href="/playlists">Playlists</NavLink>
        <NavLink href="/faq">FAQ</NavLink>
      </ul>
    </nav>
  </header>
);
