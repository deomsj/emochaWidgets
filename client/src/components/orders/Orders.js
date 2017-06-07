import React, { Component } from 'react';
import {Input, Row, Col, Button} from 'react-materialize';
import CurrentOrder from './CurrentOrder';
import PreviousOrders from './PreviousOrders';

class Orders extends Component {

  constructor(props) {
    super(props);
    this.updateOrderView = this.updateOrderView.bind(this);
    this.state = {
      currentOrder: true
    };
  }

  updateOrderView(toCurrent) {
    this.setState({
      currentOrder: toCurrent
    });
  }

  render() {
    if (this.state.currentOrder) {
      return (
        <CurrentOrder
          currentOrder={this.props.currentOrder}
          updateOrderView={this.updateOrderView}/>
      );
    } else {
      return (
        <PreviousOrders
          updateOrderView={this.updateOrderView}/>
      );
    }
  }
}

export default Orders;