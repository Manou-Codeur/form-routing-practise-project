import React from "react";

const Input = ({ label, name, value, onChange, type, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        className="form-control"
        id={label}
        name={name}
        aria-describedby="emailHelp"
        value={value}
        onChange={onChange}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
