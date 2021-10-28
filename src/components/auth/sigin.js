import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errorText: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      errorText: ""
    });
  }

  handleSubmit(event) {
    axios.post("api url sessions",
    {
        user: {
            email: this.state.email,
            password: this.state.password
        }
    },
    { withCredentials: true}
    ).then(response => {
        if (response.data.status === "created") {
            this.props.handleSucessfulAuth();
        } else {
            this.setSate({
            errorText: "The email or password is incorrect"
          });
          this.props.handleUnsucessfulAuth();
        }
    }).catch(error => {
        this.setState({
            errorText: "You are not authorized to purchase items"
        });
        this.props.handleUnsucessfulAuth();
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Sign In</h1>
            <div>
                {this.state.errorText}
            </div>

        <form onSubmit={this.handleSubmit} className="auth-form-wrapper">

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Your password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>


          <button type="submit">Login</button>
        </form>

      </div>
    );
  }
}