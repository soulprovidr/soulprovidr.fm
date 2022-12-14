import cx from "classnames";
import { ButtonHTMLAttributes } from "react";
import css from "./Button.module.scss";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "none";
}

export const Button = ({
  className,
  variant = "primary",
  ...rest
}: IButtonProps) => (
  <button className={cx(css.button, css[variant], className)} {...rest} />
);
