import { createSignal, mergeProps, splitProps } from "solid-js";
import { noop } from "../lib/util";

const INCREMENT_AMOUNT = 0.05;

export const ProgressBar = (props) => {
  const defaultProps = {
    isActive: false,
    onChange: undefined,
    value: 1,
    width: "100%",
  };

  const [local, others] = splitProps(
    mergeProps(defaultProps, props),
    Object.keys(defaultProps)
  );

  let container = undefined;

  const [isMouseDown, setIsMouseDown] = createSignal(false);

  const handleChange = (e) => {
    if (!container || !local.onChange) {
      return;
    }
    const { left, width } = container.getBoundingClientRect();
    let newValue = (e.pageX - left) / width;
    if (newValue > 1) {
      newValue = 1;
    } else if (newValue < 0) {
      newValue = 0;
    }
    local.onChange(newValue);
  };

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowUp":
      case "ArrowRight":
        local.onChange(
          local.value + INCREMENT_AMOUNT < 1
            ? local.value + INCREMENT_AMOUNT
            : 1
        );
        break;
      case "ArrowDown":
      case "ArrowLeft":
        local.onChange(
          local.value - INCREMENT_AMOUNT > 0
            ? local.value - INCREMENT_AMOUNT
            : 0
        );
        break;
    }
  };

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    if (local.onChange) {
      handleChange(e);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("mousemove", handleMouseMove);
    }
  };

  const handleMouseMove = (e) => {
    if (isMouseDown()) {
      handleChange(e);
    }
  };

  const handleMouseUp = (e) => {
    setIsMouseDown(false);
    if (local.onChange) {
      handleChange(e);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
    }
  };

  const percentValue = () => {
    if (local.value > 1) {
      return 100;
    }
    return local.value * 100;
  };

  const isDraggable = () => typeof local.onChange !== "undefined";
  const roleProps = () =>
    isDraggable()
      ? {
          role: "slider",
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": Math.round(percentValue()),
          onkeydown: handleKeyDown,
          tabindex: 0,
        }
      : {};

  return (
    <div
      class="progressBar"
      onMouseDown={handleMouseDown}
      ref={container}
      style={{ width: local.width }}
      {...others}
    >
      <div
        class="progressBar__fill"
        classList={{
          active: local.isActive,
          draggable: isDraggable(),
          dragging: isDraggable() && isMouseDown(),
        }}
        {...roleProps()}
        style={{ width: `${percentValue()}%` }}
      />
    </div>
  );
};
