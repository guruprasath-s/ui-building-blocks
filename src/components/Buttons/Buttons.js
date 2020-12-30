import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../../constants";
import "./Buttons.scss";

function Buttons({
  children,
  className,
  disabled,
  size,
  kind,
  tabIndex,
  type,
  renderIcon,
  ...other
}) {
  const buttonClasses = classNames(className, {
    [`${prefix}--btn`]: true,
    [`${prefix}--btn--default`]: size === "default",
    [`${prefix}--btn--sm`]: size === "sm",
    [`${prefix}--btn--lg`]: size === "lg",
    [`${prefix}--btn--xl`]: size === "xl",
    [`${prefix}--btn--${kind}`]: kind,
    [`${prefix}--btn--disabled`]: disabled,
  });
  const commonProps = {
    tabIndex,
    className: buttonClasses,
  };
  let otherProps = {
    disabled,
    type,
  };
  let component = "button";
  return React.createElement(
    component,
    {
      ...other,
      ...commonProps,
      ...otherProps,
    },
    children,
    renderIcon
  );
}

export default Buttons;
