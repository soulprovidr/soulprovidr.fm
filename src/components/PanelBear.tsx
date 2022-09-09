import Head from "next/head";
import Script from "next/script";

export const PanelBear = () => (
  <Head>
    <Script
      src="https://cdn.panelbear.com/analytics.js?site=Glz28StB9tO"
      async
    />
    <Script
      dangerouslySetInnerHTML={{
        __html: `window.panelbear =
          window.panelbear || function () {
            (window.panelbear.q = window.panelbear.q || []).push(arguments);
          };
          panelbear("config", { site: "Glz28StB9tO" });`,
      }}
    />
  </Head>
);
