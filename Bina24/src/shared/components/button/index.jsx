import React from "react";
import cx from "classnames";
import "./button.css";
import Text from "./Text";

export default function Button({
  children,
  size = "medium",
  bg = "green",
  onClick,
  disabled = false,
  startIcon,
  endIcon,
  className,
  fullWidth = false,

  textColor = "light",
  textFont = "dm-sans-medium",
  textSize = "16",
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cx(
        "ady-button",
        `ady-button-${size}`,
        `ady-button-bg-${bg}`,
        {
          "ady-button-fullWidth": fullWidth,
        },
        className
      )}
    >
      {startIcon && (
        <span className="ady-button-icon">{startIcon}</span>
      )}

      <Text
        color={textColor}
        font={textFont}
        size={textSize}
      >
        {children}
      </Text>

      {endIcon && (
        <span className="ady-button-icon">{endIcon}</span>
      )}
    </button>
  );
}