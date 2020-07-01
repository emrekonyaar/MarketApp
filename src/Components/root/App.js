import React, { Component } from "react";
import Navbar from "../navi/Navi";
import Dashboard from "./Dashboard";
import { Container } from "reactstrap";
import { Route, Switch } from "react-router-dom";
import CardDetail from "../cart/CartDetail"
class App extends Component {
  render() {
    return (
      <Container>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Dashboard}/>
          <Route path="/product" exact component={Dashboard}/>
          <Route path="/cart" exact component={CardDetail}/>
        </Switch>
      </Container>
    );
  }
}
export default App;
