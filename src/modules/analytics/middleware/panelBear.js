/**
 * Inject PanelBear script into page.
 */
export const panelBearMiddleware = () => {
  // Only run in the browser.
  if (typeof window !== 'undefined') {
    const GATSBY_PANELBEAR_SITE_ID = process.env.GATSBY_PANELBEAR_SITE_ID;

    const createScriptTag = () => {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://cdn.panelbear.com/analytics.js?site=${GATSBY_PANELBEAR_SITE_ID}`;
      return script;
    };

    const script = createScriptTag();
    document.body.appendChild(script);
    window.panelbear =
      window.panelbear ||
      function () {
        window.panelbearQ = window.panelbearQ || [];
        window.panelbearQ.push(arguments);
      };
    window.panelbear('config', { site: GATSBY_PANELBEAR_SITE_ID });
  }
  return (next) => (action) => next(action);
};
