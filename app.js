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
    const elapsed = Math.min(
      new Date() - new Date(attrs.startedAt) - 10000,
      duration
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
      { disabled: radio.status === "buffering", onclick: attrs.onclick },
      {
        buffering: "LOADING",
        playing: "STOP",
        stopped: "LISTEN",
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
