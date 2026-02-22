import React from "react";
import cx from "classnames";
import "./text.css";

export default function Text({
  children,
  color = "dark",
  font = "dm-sans",
  size = "16",
  className,
}) {
  return (
    <span
      className={cx(
        "ady-text",
        `ady-text-${color}`,
        `ady-font-${font}`,
        `ady-text-${size}`,
        className
      )}
    >
      {children}
    </span>
  );
}