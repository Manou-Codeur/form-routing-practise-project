import React, { Component } from "react";
import Joi from "joi-browser";

import { addPost } from "../../assets/fakeData";
import Input from "../../common/input/Input";
import Select from "../../common/input/select";
import TextArea from "../../common/input/textArea";

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
    txtArea: Joi.string().required().min(20).max(2000).label("Post content"),
  };

  componentDidUpdate = () => {
    //i'll check if there is no error in state
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

  doSubmit = () => {
    const post = {};

    post.title = this.state.data.title;
    post.genre = this.state.data.genre.toLowerCase();
    post._id = new Date().getMilliseconds().toString();
    post.content = this.state.data.txtArea;
    post.subContent = this.state.data.txtArea.split(" ").slice(0, 20).join(" ");

    addPost(post);

    this.props.history.replace("/posts");
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
        <Input
          label="Post title"
          name="title"
          value={title}
          handleInputChange={this.handleInputChange}
          errors={errors}
        />

        <Select
          label="Genre"
          errors={errors}
          handleInputChange={this.handleInputChange}
          items={["Tech", "Sport", "Business", "Science"]}
          name="genre"
          value={genre}
        />

        <TextArea
          label="Post content"
          handleInputChange={this.handleInputChange}
          errors={errors}
          name="txtArea"
          value={txtArea}
        />

        <button className="btn btn-primary">Add</button>
      </form>
    );
  }
}

export default NewPost;
