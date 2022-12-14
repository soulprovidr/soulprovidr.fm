import cx from "classnames";
import {
  HTMLAttributes,
  KeyboardEventHandler,
  MouseEventHandler,
  useRef,
  useState,
} from "react";
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

  const getRoundedValue = (v: number) => {
    if (v > 1) return 1;
    if (v < 0) return 0;
    return Math.round(v * 100) / 100;
  };

  const handleChange = (e: MouseEvent) => {
    if (!containerRef.current || !isDraggable) {
      return;
    }
    const { left, width } = containerRef.current.getBoundingClientRect();
    onChange(getRoundedValue((e.pageX - left) / width));
  };

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
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

  const handleMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
    if (!isDraggable) return;
    setIsMouseDown(true);
    if (onChange) {
      handleChange(e.nativeEvent);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("mousemove", handleMouseMove);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDraggable) return;
    handleChange(e);
  };

  const handleMouseUp = (e: MouseEvent) => {
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
      className={cx(css.progressBar, className, {
        [css.draggable]: isDraggable,
        [css.dragging]: isDraggable && isMouseDown,
      })}
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
        })}
        style={{ width: `${value * 100}%` }}
      />
    </div>
  );
};
