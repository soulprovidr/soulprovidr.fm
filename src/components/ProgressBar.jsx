import { createSignal, mergeProps, splitProps } from "solid-js";

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
        }
      : {};

  return (
    <div
      class="progressBar"
      onMouseDown={handleMouseDown}
      ref={container}
      style={{ width: local.width }}
      {...roleProps()}
      {...others}
    >
      <div
        class="progressBar__fill"
        classList={{
          active: local.isActive,
          draggable: isDraggable(),
          dragging: isDraggable() && isMouseDown(),
        }}
        style={{ width: `${percentValue()}%` }}
      />
    </div>
  );
};
