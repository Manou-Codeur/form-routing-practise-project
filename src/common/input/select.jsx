import React from "react";

const Select = props => {
  const { label, errors, handleInputChange, items, ...rest } = props;

  return (
    <div className="form-group">
      <label htmlFor={label}>{label}</label>
      <select
        {...rest}
        className="form-control"
        id={label}
        onChange={handleInputChange}
      >
        <option></option>
        {items.map(els => (
          <option key={els}>{els}</option>
        ))}
      </select>
      {errors.genre && <div className="alert alert-danger">{errors.genre}</div>}
    </div>
  );
};

export default Select;
