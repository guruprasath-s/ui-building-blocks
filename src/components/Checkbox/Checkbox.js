import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../../constants";
import "./Checkbox.scss";

function Checkbox({
  className,
  name,
  labelText,
  onChange,
  hideLabel,
  wrapperClassName,
  title = "",
  id,
  ...other
}) {
  const labelClasses = classNames(`${prefix}--checkbox-label`, className);
  const innerLabelClasses = classNames(`${prefix}--checkbox-label-text`, {
    [`${prefix}--visually-hidden`]: hideLabel,
  });
  const wrapperClasses = classNames(
    `${prefix}--form-item`,
    `${prefix}--checkbox-wrapper`,
    wrapperClassName
  );
  return (
    <div className={wrapperClasses}>
      <input
        {...other}
        type="checkbox"
        onChange={(evt) => {
          onChange(evt);
        }}
        className={`${prefix}--checkbox`}
        name={name}
        id={id}
      />
      <label htmlFor={id} className={labelClasses} title={title || null}>
        <span className={innerLabelClasses}>{labelText}</span>
      </label>
    </div>
  );
}

Checkbox.propTypes = {
  className: PropTypes.string,
  hideLabel: PropTypes.bool,
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  title: PropTypes.string,
  wrapperClassName: PropTypes.string,
  id: PropTypes.string.isRequired,
};

Checkbox.defaultProps = {
  onChange: () => {},
};

Checkbox.displayName = "Checkbox-GX";

export default Checkbox;
