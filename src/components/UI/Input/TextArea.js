import React, { useState } from "react";
import styles from "./TextArea.module.scss";

const TextArea = ({
  onChange,
  value,
  fieldName,
  placeholder,
  register,
  className,
  rules,
  disabled,
  label,
  labelClassName,
  ...rest
}) => {
  return (
    <div className={`${styles.textareaContainer} ${className}`}>
      {label && (
        <div className={`${styles.label} ${labelClassName}`}>{label}</div>
      )}
      <textarea
        disabled={disabled}
        className={styles.textarea}
        value={value}
        onChange={onChange}
        name={fieldName}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default TextArea;
