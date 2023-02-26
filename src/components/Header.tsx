import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import css from "./Header.module.scss";
import { LiveText } from "./LiveText";

interface INavLinkProps {
  children: ReactNode;
  href: string;
}

const NavLink = ({ children, href }: INavLinkProps) => {
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
            <img alt="" src="/logo.png" />
            Soul Provider
          </a>
        </Link>
      </div>
    </div>
    <nav className={css.navigation}>
      <ul>
        <LiveText as={NavLink} href="/" />
        <NavLink href="/faq">FAQ</NavLink>
      </ul>
    </nav>
  </header>
);
