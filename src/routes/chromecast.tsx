import { ChromecastPlayer } from "@components/chromecast/ChromecastPlayer";
import { ChromecastRadioProvider } from "@components/chromecast/ChromecastRadioProvider";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/chromecast")({
  head: () => ({
    meta: [{ name: "robots", content: "noindex,nofollow" }],
    scripts: [
      {
        src: "https://www.gstatic.com/cast/sdk/libs/caf_receiver/v3/cast_receiver_framework.js",
      },
    ],
  }),
  component: ChromecastPage,
});

function ChromecastPage() {
  return (
    <ChromecastRadioProvider>
      <ChromecastPlayer />
    </ChromecastRadioProvider>
  );
}
