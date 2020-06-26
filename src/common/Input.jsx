import React from "react";

const Input = ({ label, name, value, onChange, type }) => {
  return (
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">{label}</label>
      <input
        type={type}
        className="form-control"
        id="exampleInputEmail1"
        name={name}
        aria-describedby="emailHelp"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
