import cx from "classnames";
import Link from "next/link";
import css from "./Footer.module.scss";

const icons = {
  spotify: {
    href: "https://open.spotify.com/user/soulprovidr",
    title: "Soul Provider on Spotify",
  },
  soundcloud: {
    href: "https://soundcloud.com/soulprovidr",
    title: "Soul Provider on SoundCloud",
  },
  github: {
    href: "https://github.com/soulprovidr",
    title: "Soul Provider on GitHub",
  },
  email: {
    href: "mailto:shola@soulprovidr.fm",
    title: "Email Soul Provider",
  },
};

interface IFooterProps {
  className?: string;
}

export const Footer = ({ className }: IFooterProps) => (
  <footer className={cx(css.footer, className)}>
    <ul className={css.links}>
      <li>
        <Link href="/privacy">Privacy Policy</Link>
      </li>
    </ul>
    <ul className={css.icons}>
      {Object.entries(icons).map(([key, { href, title }]) => (
        <li key={href}>
          <a href={href} rel="noreferrer" target="_blank" title={title}>
            <img src={`/icons/${key}.svg`} />
          </a>
        </li>
      ))}
    </ul>
  </footer>
);
