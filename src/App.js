import React from "react";
import "./App.css";
import Login from "./components/login/login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import AddUser from "./components/addUser/adduser";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/add-user" component={AddUser} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
