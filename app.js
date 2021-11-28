import { isEmpty, msToTime, noop } from "./helpers.js";
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

const LazyImage = () => {
  let isVisible = false;
  return {
    oncreate({ attrs }) {
      const img = new Image();
      img.onload = () => {
        isVisible = true;
        m.redraw();
      };
      img.src = attrs.src;
    },
    view({ attrs }) {
      return m("img", {
        alt: attrs.alt,
        class: `${attrs.className} ${isVisible ? "visible" : "hidden"}`,
        src: attrs.src,
        style: attrs.height ? `height: ${attrs.height}px` : null,
      });
    },
  };
};

const Metadata = {
  view({ attrs }) {
    return [
      m(LazyImage, {
        alt: `Artwork for ${attrs.title} by ${attrs.artist}`,
        className: "metadata__cover",
        height: document.body.clientWidth,
        src: attrs.cover,
      }),
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

const ProgressBar = ({ attrs }) => {
  const { onChange } = attrs;
  let containerRef = null;
  let isMouseDown = false;

  const handleChange = (e) => {
    const { left, width } = containerRef.getBoundingClientRect();
    let newValue = (e.pageX - left) / width;
    if (newValue > 1) {
      newValue = 1;
    } else if (newValue < 0) {
      newValue = 0;
    }
    onChange(newValue);
  };

  const onMouseDown = (e) => {
    isMouseDown = true;
    if (onChange) {
      handleChange(e);
      document.addEventListener("mouseup", onMouseUp);
      document.addEventListener("mousemove", onMouseMove);
    }
  };

  const onMouseMove = (e) => {
    if (isMouseDown && onChange) {
      handleChange(e);
    }
  };

  const onMouseUp = (e) => {
    isMouseDown = false;
    if (onChange) {
      handleChange(e);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onMouseMove);
    }
  };

  return {
    oncreate({ dom }) {
      containerRef = dom;
    },
    view({ attrs }) {
      const fillWidth = `${attrs.value <= 1 ? attrs.value * 100 : 100}%`;
      return m(
        "div.progressBar",
        { onmousedown: onMouseDown, style: `width: ${attrs.width || "100%"}` },
        m("div.progressBar__fill", {
          className: attrs.isActive ? "progressBar__fill--active" : "",
          style: `width: ${fillWidth}`,
        })
      );
    },
  };
};

const RadioProgress = {
  oninit() {
    const update = () => {
      m.redraw();
      requestAnimationFrame(update);
    };
    update();
  },
  view({ attrs }) {
    const duration = attrs.duration * 1000;
    const elapsed = Math.max(
      Math.min(new Date() - new Date(attrs.startedAt) - 10000, duration),
      0
    );
    const progress = Math.min(1, elapsed / duration) || 0;
    return m("div.radioProgress", [
      m(ProgressBar, { isActive: attrs.status === "playing", value: progress }),
      m("div.radioProgress__time", [
        m("div.span", msToTime(elapsed)),
        m("div.span", msToTime(duration)),
      ]),
    ]);
  },
};

const ListenButton = {
  view({ attrs }) {
    return m(
      "button.listenButton",
      {
        disabled: attrs.status === "buffering",
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

const VolumeControl = {
  view({ attrs }) {
    const handleIconClick = () => {
      if (attrs.volume === 0) {
        attrs.setVolume(1);
      } else {
        attrs.mute();
      }
    };
    return m("div.volumeControl", [
      m(
        "button.volumeControl__icon",
        { onclick: handleIconClick },
        attrs.isMuted || attrs.volume === 0
          ? m.trust(`
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-off-fill" viewBox="0 0 16 16">
              <path d="M10.717 3.55A.5.5 0 0 1 11 4v8a.5.5 0 0 1-.812.39L7.825 10.5H5.5A.5.5 0 0 1 5 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/>
            </svg>
          `)
          : m.trust(`
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-up-fill" viewBox="0 0 16 16">
            <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
            <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
            <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/>
          </svg>
        `)
      ),
      m(ProgressBar, {
        isActive: !attrs.isMuted,
        onChange: attrs.setVolume,
        value: attrs.volume ?? 1,
        width: "50px",
      }),
    ]);
  },
};

const Controls = {
  view({ attrs }) {
    return m(
      "div.controls",
      m(ListenButton, {
        onclick: () => {
          attrs.status === "stopped" ? attrs.listen() : attrs.stop();
        },
        status: attrs.status,
      }),
      m("div", [
        m(VolumeControl, {
          isMuted: attrs.isMuted,
          mute: attrs.mute,
          setVolume: attrs.setVolume,
          volume: attrs.volume,
        }),
      ])
    );
  },
};

const App = () => {
  const radio = new Radio();

  const setVolume = (volume) => {
    radio.volume = volume;
  };

  return {
    oncreate() {
      radio.init(document.querySelector("audio"), { onupdate: m.redraw });
      radio.poll();
      window.addEventListener("focus", radio.refresh);
      window.addEventListener("offline", radio.stop);
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
          m(RadioProgress, {
            duration: radio.metadata.duration,
            status: radio.status,
            startedAt: radio.metadata.started_at,
          }),
          m(Controls, {
            isMuted: radio.isMuted,
            listen: radio.listen,
            mute: radio.mute,
            setVolume,
            status: radio.status,
            stop: radio.stop,
            volume: radio.volume,
          }),
        ]),
      ];
      return [audio, children];
    },
  };
};

m.mount(document.body.querySelector("#radio"), App);
