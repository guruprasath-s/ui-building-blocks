import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../../constants";
import "./Radio.scss";

function Radio({
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
  const labelClasses = classNames(`${prefix}--radio-button-label`, className);
  const innerLabelClasses = classNames(`${prefix}--radio-button-label-text`, {
    [`${prefix}--visually-hidden`]: hideLabel,
  });
  const wrapperClasses = classNames(
    `${prefix}--radio-button-wrapper`,
    wrapperClassName
  );
  return (
    <div className={wrapperClasses}>
      <input
        {...other}
        type="radio"
        onChange={(evt) => {
          onChange(evt);
        }}
        className={`${prefix}--radio-button`}
        name={name}
        id={id}
      />
      <label htmlFor={id} className={labelClasses} title={title || null}>
        <span className={`${prefix}--radio-button__appearance`} />
        <span className={innerLabelClasses}>{labelText}</span>
      </label>
    </div>
  );
}

Radio.propTypes = {
  className: PropTypes.any,
  hideLabel: PropTypes.any,
  id: PropTypes.any,
  labelText: PropTypes.any,
  name: PropTypes.any,
  onChange: PropTypes.func,
  title: PropTypes.string,
  wrapperClassName: PropTypes.any,
};

Radio.defaultProps = {
  onChange: () => {},
};

Radio.displayName = "Radio-GX";

export default Radio;
