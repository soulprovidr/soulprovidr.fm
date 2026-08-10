import { MDXProvider } from "@components/mdx";
import "@styles/global.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  HeadContent,
  Outlet,
  ScriptOnce,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";

const queryClient = new QueryClient();

const googleAnalyticsScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-2C3K5J39E7');
`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      {
        name: "keywords",
        content:
          "shola,anozie,soul,music,radio,funk,disco,rnb,reggae,online,stream",
      },
      { name: "apple-itunes-app", content: "app-id=1616086357" },
    ],
    links: [{ rel: "icon", href: "/logo.png" }],
    scripts: [
      { src: "https://www.googletagmanager.com/gtag/js?id=G-2C3K5J39E7" }
    ]
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <MDXProvider>
            <Outlet />
          </MDXProvider>
        </QueryClientProvider>
        <Scripts />
        <ScriptOnce children={googleAnalyticsScript} />
      </body>
    </html>
  );
}
