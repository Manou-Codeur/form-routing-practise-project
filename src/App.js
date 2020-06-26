import React from "react";
import Joi from "joi-browser";
import Form from "./common/from";

import "./App.css";

class App extends Form {
  state = {
    data: {
      userName: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    userName: Joi.string().required().label("Username"),
    password: Joi.string().required().min(10).label("Password"),
  };

  doSubmit = () => {
    console.log("call the server");
  };

  render() {
    return (
      <form onSubmit={this.preventDefault}>
        {this.renderInput("Username", "userName")}
        {this.renderInput("Password", "password", "password")}

        <button
          type="submit"
          className="btn btn-primary"
          disabled={this.validate()}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default App;
