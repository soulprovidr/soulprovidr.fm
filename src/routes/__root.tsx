import { MDXProvider } from "@components/mdx";
import "@styles/global.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";

const queryClient = new QueryClient();

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
      </body>
    </html>
  );
}
