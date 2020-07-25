import React, { Component } from "react";
import "./login.css";
import { Redirect } from "react-router";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  componentDidMount() {
    const users = JSON.parse(localStorage.getItem("users"));

    this.props.setUser(users);
  }
  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmitHandler = () => {
    // check for validation
    const { username, password } = this.state;
    console.log(this.props);
    if (username && password) {
      const loggedInUser =
        this.props.users &&
        this.props.users.find((user) => user.name === username);
      if (loggedInUser) {
        this.props.setLoggedIn(loggedInUser);
        this.props.history.push("/dashboard");
      }
    }
  };
  render() {
    return (
      <div className="login-form">
        <label className="label">Username</label>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.onChangeHandler}
          required
        />
        <label className="label">Password</label>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.onChangeHandler}
          required
        />
        <button type="button" onClick={this.onSubmitHandler}>
          Login
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLoggedIn: (data) => {
      dispatch({ type: "SET_LOGIN", payload: data });
    },
    setUser: (data) => {
      dispatch({ type: "SET_USERS", payload: data });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
