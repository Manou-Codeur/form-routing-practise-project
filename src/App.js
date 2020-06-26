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
    return { username: "User name is required" };
  };

  preventDefault = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors });
    if (errors) return;

    console.log("call the server");
  };

  updateUserState = ({ target: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;

    return (
      <form onSubmit={this.preventDefault}>
        <Input
          label="User Name"
          name="userName"
          value={account.userName}
          onChange={this.updateUserState}
          type="text"
        />
        <Input
          label="Password"
          name="password"
          value={account.password}
          onChange={this.updateUserState}
          type="password"
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default App;
