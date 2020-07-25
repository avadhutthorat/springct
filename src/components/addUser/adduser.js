import React, { Component } from "react";
import "./adduser.css";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { v4 as uuidV4 } from "uuid";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      phone: "",
      role: "",
    };
  }

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmitHandler = () => {
    // check for validation
    const { name, address, phone, role } = this.state;
    if (phone && phone.length !== 10) {
      alert("Please enter 10 digit number");
      return;
    } else {
      if ((name && address && phone, role)) {
        this.props.addUser({ id: uuidV4(), name, address, phone });
        alert("User created successfully");
        this.props.history.push("/dashboard");
      }
    }
  };
  onCancelHandler = () => this.props.history.push("/dashboard");
  render() {
    return (
      <div className="add-form">
        <label className="label">name</label>
        <br />
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.onChangeHandler}
          required
        />
        <br />
        <label className="label">Address</label>
        <br />
        <input
          type="text"
          name="address"
          value={this.state.address}
          onChange={this.onChangeHandler}
          required
        />
        <br />
        <label className="label">role</label>
        <br />
        <input
          type="text"
          name="role"
          value={this.state.role}
          onChange={this.onChangeHandler}
          required
        />
        <br />
        <label className="label">Phone no.</label>
        <br />
        <input
          type="number"
          name="phone"
          value={this.state.phone}
          onChange={this.onChangeHandler}
          required
        />
        <br />
        <button type="button" onClick={this.onSubmitHandler}>
          Add User
        </button>
        <button type="button" onClick={this.onCancelHandler}>
          Cancel
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
    addUser: (userData) => {
      dispatch({ type: "ADD_USER", payload: userData });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
