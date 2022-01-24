import isMobile from "ismobilejs";
import {
  createEffect,
  createMemo,
  createSignal,
  createRenderEffect,
  createResource,
  onMount,
  mergeProps,
  on,
  For,
} from "solid-js";
import { createStore } from "solid-js/store";
import { Show } from "solid-js/web";
import { LazyImage } from "../components/LazyImage";
import { MarqueeText } from "../components/MarqueeText";
import { ProgressBar } from "../components/ProgressBar";
import {
  setActionHandler,
  setMetadata,
  setPlaybackState,
} from "../lib/mediaSession";
import { msToTime, noop, pick } from "../lib/util";
import logoUrl from "../public/logo.svg";

const Header = () => (
  <header>
    <div class="title">
      <img alt="Soul Provider logo" class="logo" src={`${logoUrl}`} />
      <h1>SOUL PROVIDER</h1>
    </div>
    <ul>
      <li>
        <div class="live"></div>
        LIVE
      </li>
    </ul>
  </header>
);

const CoverImage = (props) => {
  const [activeCover, setActiveCover] = createSignal(props.metadata.cover);
  const [metadata, setMetadata] = createSignal([props.metadata]);

  // Remove previous cover image.
  createEffect((prev) => {
    if (prev && prev !== props.metadata.cover) {
      setMetadata([...metadata(), props.metadata]);
      setTimeout(() => setMetadata([metadata()[1]]), 1000);
    }
    return props.metadata.cover;
  });

  return (
    <div class="metadata__cover" style={{ height: `${props.height}px` }}>
      <For each={metadata()}>
        {(m) => {
          const isActive = () => activeCover() === m.cover;
          const [isComplete, setIsComplete] = createSignal(false);
          createEffect(
            on(
              isActive,
              (v) => {
                if (!v) {
                  setIsComplete(true);
                }
              },
              { defer: true }
            )
          );
          return (
            <div
              classList={{
                isActive: isActive(),
                isComplete: isComplete(),
              }}
            >
              <LazyImage
                alt={`Artwork for ${m.title} by ${m.artist}`}
                onload={() => setActiveCover(m.cover)}
                src={m.cover}
              />
            </div>
          );
        }}
      </For>
    </div>
  );
};

const Metadata = (props) => {
  return (
    <>
      <CoverImage
        height={document.body.clientWidth}
        metadata={props.metadata}
      />
      <div class="metadata__text">
        <MarqueeText class="metadata__title">
          {props.metadata?.title}
        </MarqueeText>
        <MarqueeText class="metadata__artist">
          {props.metadata?.artist}
        </MarqueeText>
      </div>
    </>
  );
};

const RadioProgress = (props) => {
  const defaultProps = {
    duration: 0,
    status: "stopped",
    startedAt: null,
  };

  const local = mergeProps(defaultProps, props);

  const [elapsed, setElapsed] = createSignal(0);
  const [progress, setProgress] = createSignal(0);

  const duration = () => (local.duration ? local.duration * 1000 : 0);

  // Update progress value.
  createRenderEffect(() => {
    const tick = () => {
      const newElapsed = Math.max(
        Math.min(
          new Date().getTime() -
            new Date(local.startedAt || "").getTime() -
            10000,
          duration()
        ),
        0
      );
      setElapsed(newElapsed);
      setProgress(Math.min(1, newElapsed / duration()));
      requestAnimationFrame(tick);
    };
    tick();
  });

  return (
    <div class="radioProgress">
      <ProgressBar isActive={local.status === "playing"} value={progress()} />
      <div class="radioProgress__time">
        <span>{msToTime(elapsed())}</span>
        <span>{msToTime(duration())}</span>
      </div>
    </div>
  );
};

const ListenButton = (props) => {
  const defaultProps = {
    listen: noop,
    status: "stopped",
    stop: noop,
  };

  const local = mergeProps(defaultProps, props);

  const children = createMemo(() => {
    switch (local.status) {
      case "buffering":
        return `
           <svg class="loading" xmlns="http://www.w3.org/2000/svg" width="16" height="12" fill="currentColor" class="bi bi-disc-fill" viewBox="0 0 16 16">
             <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-6 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0zM4 8a4 4 0 0 1 4-4 .5.5 0 0 0 0-1 5 5 0 0 0-5 5 .5.5 0 0 0 1 0zm9 0a.5.5 0 1 0-1 0 4 4 0 0 1-4 4 .5.5 0 0 0 0 1 5 5 0 0 0 5-5z"/>
           </svg>
           LOADING
         `;
      case "playing":
        return `
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stop-fill" viewBox="0 0 16 16">
             <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z"/>
           </svg>
           STOP
         `;
      case "stopped":
        return `
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
             <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
           </svg>
           LISTEN
         `;
    }
  });

  const onclick = () =>
    local.status === "stopped" ? local.listen() : local.stop();

  return (
    <button
      aria-label={local.status === "stopped" ? "listen" : "stop"}
      autofocus
      class="listenButton"
      disabled={local.disabled}
      onclick={onclick}
      innerHTML={children()}
    />
  );
};

const VolumeControl = (props) => {
  const defaultProps = {
    isMuted: false,
    mute: noop,
    setVolume: noop,
    value: 1,
  };

  const local = mergeProps(defaultProps, props);

  const handleIconClick = () => {
    if (local.value === 0) {
      local.setVolume(1);
    } else {
      local.mute();
    }
  };

  const icon = createMemo(() =>
    local.isMuted || local.value === 0
      ? `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-mute-fill" viewBox="0 0 16 16">
              <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/>
            </svg>
          `
      : local.value <= 0.5
      ? `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-down-fill" viewBox="0 0 16 16">
              <path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12V4zm3.025 4a4.486 4.486 0 0 1-1.318 3.182L10 10.475A3.489 3.489 0 0 0 11.025 8 3.49 3.49 0 0 0 10 5.525l.707-.707A4.486 4.486 0 0 1 12.025 8z"/>
            </svg>
          `
      : `
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-up-fill" viewBox="0 0 16 16">
            <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
            <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
            <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/>
          </svg>
        `
  );

  return (
    <div class="volumeControl">
      <button
        aria-label={local.isMuted || local.value === 0 ? "unmute" : "mute"}
        class="volumeControl__icon"
        onclick={handleIconClick}
        innerHTML={icon()}
      />
      <ProgressBar
        aria-label="volume"
        isActive={!local.isMuted}
        onChange={local.setVolume}
        value={local.value}
        width="60px"
      />
    </div>
  );
};

const Controls = (props) => {
  const defaultProps = {
    isMuted: false,
    listen: noop,
    mute: noop,
    setVolume: noop,
    status: "stopped",
    stop: noop,
    volume: 1,
  };

  const local = mergeProps(defaultProps, props);

  return (
    <div class="controls">
      <ListenButton
        listen={local.listen}
        status={local.status}
        stop={local.stop}
      />
      <div>
        {!isMobile(window.navigator).any && (
          <VolumeControl
            isMuted={local.isMuted}
            mute={local.mute}
            setVolume={local.setVolume}
            value={local.volume}
          />
        )}
      </div>
    </div>
  );
};

const MediaSession = (props) => {
  onMount(() => {
    setActionHandler("play", props.listen);
    setActionHandler("pause", props.stop);
    setActionHandler("stop", props.stop);
  });

  createEffect(() => {
    setMetadata({
      artist: props.metadata?.artist,
      artwork: [
        { src: props.metadata?.cover, sizes: "400x400", type: "image/jpeg" },
      ],
      title: props.metadata?.title,
    });
  });

  createEffect(() => {
    let playbackState;
    switch (props.status) {
      case "buffering":
      case "playing":
        playbackState = "playing";
        break;
      case "stopped":
        playbackState = "paused";
        break;
    }
    setPlaybackState(playbackState);
  });
};

const createLocalStore = (defaultState, persistKeys = []) => {
  const [state, setState] = createStore(defaultState);
  if (localStorage.radio) setState(JSON.parse(localStorage.radio));
  createEffect(() => {
    if (persistKeys.length) {
      localStorage.radio = JSON.stringify(pick(state, persistKeys));
    }
  });
  return [state, setState];
};

export default () => {
  let audio = undefined;

  const [metadata, { refetch }] = createResource(
    async () =>
      (
        await fetch(
          "https://api.radioking.io/widget/radio/soulprovidr/track/current"
        )
      ).json(),
    {
      initialValue: null,
    }
  );

  const [state, setState] = createLocalStore(
    {
      isMuted: false,
      status: "stopped",
      volume: 1,
    },
    ["volume"]
  );

  const handleAudioError = () => setState({ status: "stopped" });
  const handleAudioPlaying = () => setState({ status: "playing" });
  const handleAudioPause = () => setState({ status: "stopped" });
  const handleAudioWaiting = () => setState({ status: "buffering" });

  const listen = () => {
    if (audio) {
      audio.load();
      audio.play();
    }
  };

  const mute = () => {
    if (audio) {
      setState({ isMuted: !audio.muted });
      audio.muted = !audio.muted;
    }
  };

  const setVolume = (volume) => {
    if (audio) {
      audio.volume = volume;
      setState({ volume });
    }
  };

  const stop = () => {
    if (audio) {
      audio.pause();
    }
  };

  onMount(() => {
    window.addEventListener("focus", refetch);
    window.addEventListener("offline", stop);
    setVolume(state.volume);
  });

  // Refresh the metadata in time for the next track.
  createEffect(() => {
    const nextTrack = metadata()?.next_track || null;
    if (nextTrack) {
      setTimeout(
        refetch,
        new Date(nextTrack).getTime() - new Date().getTime() + 10000
      );
    }
  });

  return (
    <>
      <Show when={metadata()}>
        <Header />
        <Metadata metadata={metadata()} />
        <RadioProgress
          duration={metadata().duration}
          startedAt={metadata().started_at}
          status={state.status}
        />
        <Controls
          isMuted={state.isMuted}
          listen={listen}
          mute={mute}
          setVolume={setVolume}
          status={state.status}
          stop={stop}
          volume={state.volume}
        />
        <MediaSession
          listen={listen}
          metadata={metadata()}
          status={state.status}
          stop={stop}
        />
      </Show>
      <audio
        preload="none"
        ref={audio}
        onError={handleAudioError}
        onPause={handleAudioPause}
        onPlaying={handleAudioPlaying}
        onWaiting={handleAudioWaiting}
        src="https://www.radioking.com/play/soulprovidr"
      />
    </>
  );
};