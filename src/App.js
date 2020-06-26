import React, { Component } from "react";
import Joi from "joi-browser";

import Input from "./common/Input";

import "./App.css";

class App extends Component {
  state = {
    account: {
      userName: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    userName: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  validate = () => {
    const options = { abortEarly: false };
    const result = Joi.validate(this.state.account, this.schema, options);

    if (!result.error) return null;

    const errors = {};
    for (let els of result.error.details) {
      errors[els.path[0]] = els.message;
    }
    return errors;
  };

  preventDefault = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    console.log("call the server");
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  updateUserState = ({ target: input }) => {
    const errors = { ...this.state.errors };
    const errorMsg = this.validateProperty(input);
    if (errorMsg) errors[input.name] = errorMsg;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;

    return (
      <form onSubmit={this.preventDefault}>
        <Input
          label="User Name"
          name="userName"
          value={account.userName}
          onChange={this.updateUserState}
          type="text"
          error={errors.userName}
        />
        <Input
          label="Password"
          name="password"
          value={account.password}
          onChange={this.updateUserState}
          type="password"
          error={errors.password}
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default App;
