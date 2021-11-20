(() => {
  const radio = {
    _metadata: {},
    _status: "stopped",
    get metadata() {
      return radio._metadata;
    },
    get status() {
      return radio._status;
    },
    set status(value) {
      radio._status = value;
      radio?.onupdate();
    },
    listen: (audio) => {
      const onplaying = () => {
        radio.status = "playing";
        audio.removeEventListener("playing", onplaying);
      };
      audio.addEventListener("playing", onplaying);
      audio.load();
      audio.play();
      radio.status = "buffering";
    },
    poll: async () => {
      const res = await fetch(
        "https://api.radioking.io/widget/radio/soulprovidr/track/current"
      );
      radio._metadata = await res.json();
      radio?.onupdate();
      setTimeout(radio.poll, new Date(radio.metadata.next_track) - new Date());
    },
    stop: (audio) => {
      audio.pause();
      radio.status = "stopped";
    },
    onupdate: undefined,
  };

  const MarqueeText = ({ attrs: { className = "marquee" }, children }) => {
    let cleanup = null;
    return {
      oncreate: (node) => {
        cleanup = Marquee(node.dom);
      },
      onremove: cleanup,
      view: () => m(`div.${className}`, m("div", children)),
    };
  };

  const Metadata = {
    view: () => [
      m("img.metadata__cover", { src: radio.metadata.cover }),
      m("div.metadata__text", [
        m(
          MarqueeText,
          { className: "metadata__title", key: radio.metadata.title },
          `${radio.metadata.title}`
        ),
        m("div.metadata__artist", radio.metadata.artist),
      ]),
    ],
  };

  const Progress = {
    oninit: () => {
      setInterval(m.redraw, 100);
    },
    view: () => {
      const duration = radio.metadata.duration * 1000;
      const elapsed = new Date() - new Date(radio.metadata.started_at);
      const percent = Math.min(100, (elapsed / duration) * 100) || 0;
      return m("div.progress", [
        m(
          "div.progress__bar",
          m("div.progress__fill", { style: `width: ${percent}%` })
        ),
        m("div.progress__time", [
          m("div.span", msToTime(elapsed)),
          m("div.span", msToTime(duration)),
        ]),
      ]);
    },
  };

  const ListenButton = {
    oncreate: (vnode) => {
      const audio = vnode.dom.querySelector("audio");
      const button = vnode.dom.querySelector("button");
      button.addEventListener("click", () => {
        audio.paused ? radio.listen(audio) : radio.stop(audio);
      });
    },
    view: () => {
      return m(
        "div.listen",
        m("audio", {
          preload: "none",
          src: "https://www.radioking.com/play/soulprovidr",
        }),
        m(
          "button",
          { disabled: radio.status === "buffering" },
          {
            buffering: "LOADING",
            playing: "STOP",
            stopped: "LISTEN",
          }[radio.status]
        )
      );
    },
  };

  const App = {
    oninit: () => {
      radio.onupdate = m.redraw;
      radio.poll();
    },
    view: () =>
      !isEmpty(radio.metadata) &&
      m("main", [m(Metadata), m(Progress), m(ListenButton)]),
  };

  m.mount(document.body.querySelector("#radio"), App);
})();
