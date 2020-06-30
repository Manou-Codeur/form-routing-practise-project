import React from "react";

const TextArea = props => {
  const { label, handleInputChange, errors, ...rest } = props;

  return (
    <div className="form-group">
      <label htmlFor={label}>{label}</label>
      <textarea
        {...rest}
        className="form-control"
        id={label}
        rows="8"
        onChange={handleInputChange}
      ></textarea>
      {errors.txtArea && (
        <div className="alert alert-danger">{errors.txtArea}</div>
      )}
    </div>
  );
};

export default TextArea;
