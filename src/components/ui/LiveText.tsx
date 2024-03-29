import cx from "classnames";
import { ComponentPropsWithoutRef, createElement, ElementType } from "react";
import css from "./LiveText.module.scss";

interface ILiveTextProps<T extends ElementType> {
  /** Type of element to wrap the 'live' icon + text in. */
  as: T;

  /** Custom class applied to the wrapper element. */
  className?: string;

  /** Gap between icon and text. */
  gap?: number;

  /** Size of the 'live' icon. */
  iconSize?: number;
}

export const LiveText = <T extends ElementType>({
  as,
  className,
  gap = 8,
  iconSize = 6,
  ...rest
}: ILiveTextProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ILiveTextProps<T> | "children">) =>
  createElement(
    as,
    {
      className: cx(className, css.container),
      style: { gap: gap + "px" },
      ...rest,
    },
    <>
      <span
        className={css.icon}
        style={{ width: iconSize + "px", height: iconSize + "px" }}
      />
      Live
    </>
  );
