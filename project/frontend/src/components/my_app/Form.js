import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addMyApp } from "../../actions/myApps";

export class Form extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  static propTypes = {
    addMyApp: PropTypes.func.isRequired
  };

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = event => {
    event.preventDefault();
    const { name, email, message } = this.state;
    const myApp = { name, email, message };
    this.props.addMyApp(myApp);
    this.setState({
      name: "",
      email: "",
      message: ""
    });
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add MyApp Data</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="inputName">Name</label>
            <input
              type="text"
              className="form-control"
              id="inputEmail"
              placeholder="Enter your name"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputEmail">Email address</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="Enter email"
              name="email"
              onChange={this.onChange}
              value={email}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="inputTextarea">Enter message</label>
            <textarea
              className="form-control"
              id="inputTextarea"
              rows="3"
              name="message"
              onChange={this.onChange}
              value={message}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addMyApp }
)(Form);
