import { ReactNode } from "react";
import Link from "next/link";
import { Head, HeadProps } from "./Head";

import css from "./Layout.module.scss";
import { PanelBear } from "./PanelBear";
import { useRouter } from "next/router";

const MobileIcon = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" fill="currentColor"
	 viewBox="0 0 27.442 27.442" style="enable-background:new 0 0 27.442 27.442;" xml:space="preserve">
<g>
	<path d="M19.494,0H7.948C6.843,0,5.951,0.896,5.951,1.999v23.446c0,1.102,0.892,1.997,1.997,1.997h11.546
		c1.103,0,1.997-0.895,1.997-1.997V1.999C21.491,0.896,20.597,0,19.494,0z M10.872,1.214h5.7c0.144,0,0.261,0.215,0.261,0.481
		s-0.117,0.482-0.261,0.482h-5.7c-0.145,0-0.26-0.216-0.26-0.482C10.612,1.429,10.727,1.214,10.872,1.214z M13.722,25.469
		c-0.703,0-1.275-0.572-1.275-1.276s0.572-1.274,1.275-1.274c0.701,0,1.273,0.57,1.273,1.274S14.423,25.469,13.722,25.469z
		 M19.995,21.1H7.448V3.373h12.547V21.1z"/>
</g>
</svg>`,
    }}
  />
);

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

const Header = () => (
  <header className={css.header}>
    <div>
      <div className={css.title}>
        <Link href="/" passHref>
          <a>
            <img alt="" className={css.logo} src="/logo.svg" />
            Soul Provider
          </a>
        </Link>
      </div>
    </div>
    <nav>
      <ol>
        {[
          {
            href: "/",
            children: "Live",
          },
          {
            href: "/mixtapes",
            children: "Mixtapes",
          },
          {
            href: "/shop",
            children: "Shop",
          },
          {
            href: "/about",
            children: "About",
          },
        ].map((props) => (
          <NavLink key={props.href} {...props} />
        ))}
      </ol>
    </nav>
    <div className={css.actions}>
      {/* <img src="/app-store.svg" /> */}
      <Link href="/mobile" passHref>
        <a className={css.download}>
          <MobileIcon />
          Download
        </a>
      </Link>
    </div>
  </header>
);

export const SocialIcons = () => (
  <ul className={css.socialIcons}>
    <li>
      <a
        href="https://github.com/soulprovidr"
        rel="noreferrer"
        target="_blank"
        title="Soul Provider on GitHub"
      >
        <img src="/icons/github.svg" />
      </a>
    </li>
    <li>
      <a
        href="https://soundcloud.com/soulprovidr"
        rel="noreferrer"
        target="_blank"
        title="Soul Provider on SoundCloud"
      >
        <img src="/icons/soundcloud.svg" />
      </a>
    </li>
    <li>
      <a
        href="https://open.spotify.com/user/soulprovidr"
        rel="noreferrer"
        target="_blank"
        title="Soul Provider on Spotify"
      >
        <img src="/icons/spotify.svg" />
      </a>
    </li>
    <li>
      <a
        href="https://www.reddit.com/u/soulprovidr/"
        rel="noreferrer"
        target="_blank"
        title="/u/soulprovidr"
      >
        <img src="/icons/reddit.svg" />
      </a>
    </li>
    <li>
      <a
        href="mailto:shola@soulprovidr.fm"
        rel="noreferrer"
        target="_blank"
        title="E-mail Soul Provider"
      >
        <img src="/icons/email.svg" />
      </a>
    </li>
  </ul>
);

interface LayoutProps extends HeadProps {
  children: ReactNode;
}

export const Layout = ({ children, description, title }: LayoutProps) => (
  <>
    <Head description={description} title={title} />
    <PanelBear />
    <Header />
    <main className={css.main}>{children}</main>
  </>
);
