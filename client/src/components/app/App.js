import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  NavLink
} from 'react-router-dom';

// Components
import NavBar from './NavBar';
import Search from '../search/Search';
import Admin from '../admin/Admin';
import Orders from '../orders/Orders';

class App extends Component {

  constructor (props) {
    super(props);
    this.addToCurrentOrder = this.addToCurrentOrder.bind(this);
    this.state = {
      widgetData: props.widgetData,
      currentOrder: []
    };
  }

  addToCurrentOrder(widget) {
    this.setState({
      currentOrder: this.state.currentOrder.concat(widget)
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <div className="navbar-fixed">
              <NavBar />
            </div>
            <div className="container">
              <Route exact path="/" render={() =>
                <Search
                  data={this.state.widgetData}
                  addToCurrentOrder={this.addToCurrentOrder} />
                } />
              <Route exact path="/orders" render={() =>
                <Orders
                  data={this.state.widgetData}
                  currentOrder={this.state.currentOrder} />
                } />
              <Route exact path="/admin" render={() =>
                <Admin
                  data={this.state.widgetData} />
                } />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}


// Export module
export default App;