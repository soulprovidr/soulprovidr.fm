import { Button } from "@components/shared/Button";
import { useMemo } from "react";
import { useRadioContext } from "../context";
import { RadioStatus } from "../types";
import css from "./ListenButton.module.scss";

export const ListenButton = () => {
  const { listen, status, stop } = useRadioContext();

  const children = useMemo(() => {
    switch (status) {
      case RadioStatus.BUFFERING:
        return (
          <>
            <svg
              className={css.loading}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="12"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-6 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0zM4 8a4 4 0 0 1 4-4 .5.5 0 0 0 0-1 5 5 0 0 0-5 5 .5.5 0 0 0 1 0zm9 0a.5.5 0 1 0-1 0 4 4 0 0 1-4 4 .5.5 0 0 0 0 1 5 5 0 0 0 5-5z" />
            </svg>
            LOADING
          </>
        );
      case RadioStatus.PLAYING:
        return (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z" />
            </svg>
            STOP
          </>
        );
      case RadioStatus.STOPPED:
        return (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
            </svg>
            LISTEN
          </>
        );
    }
  }, [status]);

  const isStopped = status === RadioStatus.STOPPED;

  return (
    <Button
      aria-label={isStopped ? "listen" : "stop"}
      autoFocus
      onClick={() => (isStopped ? listen() : stop())}
    >
      {children}
    </Button>
  );
};
