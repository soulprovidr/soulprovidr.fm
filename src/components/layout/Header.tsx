import { LiveText } from "@components/ui/LiveText";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import css from "./Header.module.scss";

interface INavLinkProps {
  children: ReactNode;
  href: string;
}

const NavLink = ({ children, href }: INavLinkProps) => {
  const router = useRouter();
  return (
    <li className={router.asPath === href ? css.active : ""}>
      <Link href={href}>{children}</Link>
    </li>
  );
};

export const Header = () => (
  <header className={css.header}>
    <div>
      <div className={css.logo}>
        <Link href="/">
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
