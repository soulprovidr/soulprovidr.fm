import { ChromecastPlayer } from "@components/chromecast/ChromecastPlayer";
import Head from "next/head";
import Script from "next/script";

export default function ChromecastPage() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <Script
        src="https://www.gstatic.com/cast/sdk/libs/caf_receiver/v3/cast_receiver_framework.js"
        strategy="beforeInteractive"
      />
      {/* Cast Debug Logger */}
      <Script
        src="//www.gstatic.com/cast/sdk/libs/devtools/debug_layer/caf_receiver_logger.js"
        strategy="beforeInteractive"
      />
      <ChromecastPlayer />
    </>
  );
}
