import cx from "classnames";
import { HTMLAttributes, useRef, useState } from "react";
import css from "./ProgressBar.module.scss";

const INCREMENT_AMOUNT = 0.05;

interface IProgressBarProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  isActive?: boolean;
  onChange?: (value: number) => void;
  value: number;
}

export const ProgressBar = ({
  className = "",
  isActive = false,
  onChange = undefined,
  value = 1,
  ...rest
}: IProgressBarProps) => {
  const containerRef = useRef<HTMLDivElement>();
  const [isMouseDown, setIsMouseDown] = useState(false);

  const isDraggable = typeof onChange !== "undefined";

  const getRoundedValue = (v) => {
    if (v > 1) return 1;
    if (v < 0) return 0;
    return Math.round(v * 100) / 100;
  };

  const handleChange = (e) => {
    if (!containerRef.current || !isDraggable) {
      return;
    }
    const { left, width } = containerRef.current.getBoundingClientRect();
    onChange(getRoundedValue((e.pageX - left) / width));
  };

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowUp":
      case "ArrowRight":
        onChange(value + INCREMENT_AMOUNT < 1 ? value + INCREMENT_AMOUNT : 1);
        break;
      case "ArrowDown":
      case "ArrowLeft":
        onChange(value - INCREMENT_AMOUNT > 0 ? value - INCREMENT_AMOUNT : 0);
        break;
    }
  };

  const handleMouseDown = (e) => {
    if (!isDraggable) return;
    setIsMouseDown(true);
    if (onChange) {
      handleChange(e);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("mousemove", handleMouseMove);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDraggable) return;
    if (isMouseDown) {
      handleChange(e);
    }
  };

  const handleMouseUp = (e) => {
    setIsMouseDown(false);
    if (onChange) {
      handleChange(e);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
    }
  };

  const ariaProps = {
    role: isDraggable ? "slider" : "meter",
    "aria-label": rest["aria-label"],
    "aria-valuemin": 0,
    "aria-valuemax": 1,
    "aria-valuenow": getRoundedValue(value),
  };

  return (
    <div
      className={css.progressBar}
      onKeyDown={isDraggable ? handleKeyDown : undefined}
      onMouseDown={handleMouseDown}
      ref={containerRef}
      tabIndex={isDraggable ? 0 : -1}
      {...rest}
      {...ariaProps}
    >
      <div
        className={cx(css.fill, {
          [css.active]: isActive,
          [css.draggable]: isDraggable,
          [css.dragging]: isDraggable && isMouseDown,
        })}
        style={{ width: `${value * 100}%` }}
      />
    </div>
  );
};
