import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../../constants";
import "./TextInput.scss";

function TextInput({
  labelText,
  className,
  id,
  placeholder,
  onChange,
  onClick,
  hideLabel,
  invalid,
  invalidText,
  helperText,
  ...other
}) {
  const textInputClasses = classNames(`${prefix}--text-input`, className);
  const textInputProps = {
    id,
    onChange: (evt) => {
      if (!other.disabled) {
        onChange(evt);
      }
    },
    onClick: (evt) => {
      if (!other.disabled) {
        onClick(evt);
      }
    },
    placeholder,
    type: "text",
    className: textInputClasses,
    ...other,
  };
  const labelClasses = classNames(`${prefix}--label`, {
    [`${prefix}--visually-hidden`]: hideLabel,
    [`${prefix}--label--disabled`]: other.disabled,
  });
  const helperTextClasses = classNames(`${prefix}--form__helper-text`, {
    [`${prefix}--form__helper-text--disabled`]: other.disabled,
  });
  const label = labelText ? (
    <label htmlFor={id} className={labelClasses}>
      {labelText}
    </label>
  ) : null;
  const error = invalid ? (
    <div className={`${prefix}--form-requirement`}>{invalidText}</div>
  ) : null;
  const input = <input {...textInputProps} />;
  const helper = helperText ? (
    <div className={helperTextClasses}>{helperText}</div>
  ) : null;
  return (
    <div className={`${prefix}--form-item ${prefix}--text-input-wrapper`}>
      {label}
      <div
        className={`${prefix}--text-input__field-wrapper`}
        data-invalid={invalid || null}
      >
        {input}
      </div>
      {error ? error : helper}
    </div>
  );
}

TextInput.propTypes = {
  className: PropTypes.any,
  helperText: PropTypes.any,
  hideLabel: PropTypes.any,
  id: PropTypes.any,
  invalid: PropTypes.any,
  invalidText: PropTypes.any,
  labelText: PropTypes.any,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  placeholder: PropTypes.any,
};

TextInput.defaultProps = {
  className: `${prefix}--text__input`,
  disabled: false,
  onChange: () => {},
  onClick: () => {},
  invalid: false,
  invalidText: "",
  helperText: "",
};

export default TextInput;
