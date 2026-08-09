import { WebRadioProvider } from "@components/radio";
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <WebRadioProvider>
      <Outlet />
    </WebRadioProvider>
  );
}
