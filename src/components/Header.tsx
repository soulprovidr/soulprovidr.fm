import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import css from "./Header.module.scss";

const NavLink = ({ href, children }: { href: string; children: ReactNode }) => {
  const router = useRouter();
  return (
    <li className={router.asPath === href ? css.active : ""}>
      <Link href={href} passHref>
        <a>{children}</a>
      </Link>
    </li>
  );
};

export const Header = () => (
  <header className={css.header}>
    <div>
      <div className={css.logo}>
        <Link href="/" passHref>
          <a>
            <img alt="" src="/logo.svg" />
            Soul Provider
          </a>
        </Link>
      </div>
    </div>
    <nav className={css.navigation}>
      <ul>
        <NavLink href="/">
          <span className={css.live} />
          Live
        </NavLink>
        <NavLink href="/about">FAQ</NavLink>
      </ul>
    </nav>
  </header>
);
