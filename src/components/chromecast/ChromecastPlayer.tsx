import { RadioWidget } from "@components/radio";
import { RadioProgress } from "@components/radio/components/RadioProgress";
import { LiveText } from "@components/ui/LiveText";
import css from "./ChromecastPlayer.module.scss";
import { ChromecastProvider } from "./ChromecastProvider";

export const ChromecastPlayer = () => {
  return (
    <ChromecastProvider>
      <div className={css.container}>
        <header className={css.header}>
          <LiveText as="h1" gap={12} iconSize={10} />
          <img alt="" width={50} height={50} src="/logo.png" />
        </header>
        <main className={css.main}>
          <RadioWidget hideControls />
        </main>
        <footer className={css.footer}>
          <RadioProgress className={css.progressBar} />
        </footer>
      </div>
    </ChromecastProvider>
  );
};
