import React, { Component } from "react";
import { connect } from "react-redux";
import "./dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInData: {},
    };
  }
  componentDidMount() {
    const loggedInData = JSON.parse(localStorage.getItem("loggedIn"));
    if (loggedInData !== null) {
      this.setState({ loggedInData });
      if (!Object.keys(loggedInData).length) {
        this.props.history.push("/");
      }
    } else {
      this.props.history.push("/");
    }
  }
  addUser = () => {
    this.props.history.push("/add-user");
  };
  logout = () => {
    this.props.history.push("/");
    localStorage.removeItem("loggedIn");
  };
  render() {
    const { users, loggedIn } = this.props;
    return (
      <div className="dashboard">
        <h1>Welcome {loggedIn.name || this.state.loggedInData.name}</h1>
        <div className="btn">
          {loggedIn.role === "admin" ||
            (this.state.loggedInData.role === "admin" && (
              <button onClick={this.addUser}> Add User</button>
            ))}
          &nbsp;
          <button className="cancelbtn" onClick={this.logout}>
            {" "}
            Logout
          </button>
        </div>

        {users.length ? (
          <ul>
            {users.map((user) => (
              <>
                <li key={user.id}>
                  <span>
                    <strong>Name :</strong> {user.name}
                  </span>
                  &nbsp;
                  <span>
                    <strong>Address :</strong> {user.address}
                  </span>
                  &nbsp;
                  <span>
                    <strong>Phone No. :</strong> {user.phone}
                  </span>
                </li>
                <hr></hr>
              </>
            ))}
          </ul>
        ) : (
          <p> No users</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    loggedIn: state.loggedInUser,
  };
};
export default connect(mapStateToProps)(Dashboard);
