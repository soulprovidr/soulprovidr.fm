import { isEmpty, msToTime } from "./helpers.js";
import { Marquee } from "./marquee.js";
import { Radio } from "./radio.js";

const MarqueeText = ({ attrs: { className = "marquee" }, children }) => {
  let cleanup = null;
  return {
    oncreate: (node) => {
      cleanup = new Marquee(node.dom);
    },
    onremove: cleanup,
    view: () => m(`div.${className}`, m("div", children)),
  };
};

const Header = {
  view() {
    return m.trust(`
      <header>
          <div class="title">
            <img alt="Soul Provider logo" class="logo" src="logo.svg" />
            <h1>SOUL PROVIDER</h1>
          </div>
          <ul>
            <li>
              <div class="live"></div>
              LIVE
            </li>
          </ul>
        </header>
    `);
  },
};

const Metadata = {
  view({ attrs }) {
    return [
      m("img.metadata__cover", { src: attrs.cover }),
      m("div.metadata__text", [
        m(
          MarqueeText,
          { className: "metadata__title", key: attrs.title },
          `${attrs.title}`
        ),
        m("div.metadata__artist", attrs.artist),
      ]),
    ];
  },
};

const Progress = {
  oninit() {
    setInterval(m.redraw, 100);
  },
  view({ attrs }) {
    const duration = attrs.duration * 1000;
    const elapsed = Math.max(
      Math.min(new Date() - new Date(attrs.startedAt) - 10000, duration),
      0
    );
    const percent = Math.min(100, (elapsed / duration) * 100) || 0;
    return m("div.progress", [
      m(
        "div.progress__bar",
        m("div.progress__fill", {
          className:
            attrs.status === "playing" ? "progress__fill--playing" : "",
          style: `width: ${percent}%`,
        })
      ),
      m("div.progress__time", [
        m("div.span", msToTime(elapsed)),
        m("div.span", msToTime(duration)),
      ]),
    ]);
  },
};

const ListenButton = {
  view({ attrs }) {
    return m(
      "button.listen",
      {
        disabled: radio.status === "buffering",
        onclick: attrs.onclick,
      },
      {
        buffering: m.trust(`
          <svg class="loading" xmlns="http://www.w3.org/2000/svg" width="16" height="12" fill="currentColor" class="bi bi-disc-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-6 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0zM4 8a4 4 0 0 1 4-4 .5.5 0 0 0 0-1 5 5 0 0 0-5 5 .5.5 0 0 0 1 0zm9 0a.5.5 0 1 0-1 0 4 4 0 0 1-4 4 .5.5 0 0 0 0 1 5 5 0 0 0 5-5z"/>
          </svg>
          LOADING
        `),
        playing: m.trust(`
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stop-fill" viewBox="0 0 16 16">
            <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z"/>
          </svg>
          STOP
        `),
        stopped: m.trust(`
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
          </svg>
          LISTEN
        `),
      }[attrs.status]
    );
  },
};

const App = () => {
  let radio = null;
  return {
    oninit() {
      radio = new Radio();
    },
    oncreate() {
      radio.init(document.querySelector("audio"), { onupdate: m.redraw });
      radio.poll();
    },
    view() {
      const audio = m("audio", {
        preload: "none",
        src: "https://www.radioking.com/play/soulprovidr",
      });
      const children = !isEmpty(radio.metadata) && [
        m(Header),
        m("main", [
          m(Metadata, {
            cover: radio.metadata.cover,
            artist: radio.metadata.artist,
            title: radio.metadata.title,
          }),
          m(Progress, {
            duration: radio.metadata.duration,
            status: radio.status,
            startedAt: radio.metadata.started_at,
          }),
          m(ListenButton, {
            onclick: () => {
              radio.status === "stopped" ? radio.listen() : radio.stop();
            },
            status: radio.status,
          }),
        ]),
      ];
      return [audio, children];
    },
  };
};

m.mount(document.body.querySelector("#radio"), App);
