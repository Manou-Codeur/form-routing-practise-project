import React, { Component } from "react";
import Joi from "joi-browser";

import "./newPost.scss";

class NewPost extends Component {
  state = {
    data: {
      title: "",
      genre: "",
      txtArea: "",
    },
    errors: {},
  };

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    txtArea: Joi.string().required().min(20).max(500).label("Post content"),
  };

  doSubmit = () => {
    console.log("do submit");
  };

  validateSubmit = e => {
    e.preventDefault();

    const options = { abortEarly: false };
    const test = Joi.validate(this.state.data, this.schema, options);
    const myError = {};

    if (test.error) {
      for (let els of test.error.details) {
        myError[els.path[0]] = els.message;
      }
    }
    this.setState({ errors: myError });
    if (Object.keys(myError).length === 0) {
      this.doSubmit();
    }
  };

  handleInputChange = ({ target }) => {
    //updating data state
    const data = { ...this.state.data };
    data[target.name] = target.value;
    this.setState({ data });

    //updating errors state
    const newSchema = {
      [target.name]: this.schema[target.name],
    };
    const obj = {
      [target.name]: target.value,
    };
    const { error } = Joi.validate(obj, newSchema);
    const errorsClone = { ...this.state.errors };
    if (error) {
      errorsClone[error.details[0].path[0]] = error.details[0].message;
    } else {
      delete errorsClone[target.name];
    }
    this.setState({ errors: errorsClone });
  };

  render() {
    const { title, genre, txtArea } = this.state.data;
    const { errors } = this.state;
    return (
      <form className="newForm" onSubmit={this.validateSubmit}>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Post title</label>
          <input
            name="title"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            onChange={this.handleInputChange}
            value={title}
          />
          {errors.title && (
            <div className="alert alert-danger">{errors.title}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Genre</label>
          <select
            name="genre"
            className="form-control"
            id="exampleFormControlSelect1"
            onChange={this.handleInputChange}
            value={genre}
          >
            <option></option>
            <option>Tech</option>
            <option>Sport</option>
            <option>Business</option>
            <option>Science</option>
          </select>
          {errors.genre && (
            <div className="alert alert-danger">{errors.genre}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Post content</label>
          <textarea
            name="txtArea"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            onChange={this.handleInputChange}
            value={txtArea}
          ></textarea>
          {this.state.errors.txtArea && (
            <div className="alert alert-danger">
              {this.state.errors.txtArea}
            </div>
          )}
        </div>
        <button className="btn btn-primary">Add</button>
      </form>
    );
  }
}

export default NewPost;
