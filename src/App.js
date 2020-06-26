import React, { Component } from "react";

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

  validate = () => {
    const { account } = this.state;
    const errors = {};

    if (account.userName === "") errors.userName = "userName required!";
    if (account.password === "") errors.password = "password required!";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  preventDefault = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    console.log("call the server");
  };

  updateUserState = ({ target: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
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
