import React, { Component } from 'react';
import {Modal, Button} from 'react-materialize';
import { Link } from 'react-router-dom';

class CurrentOrder extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      orderNumber: '12345'
    };
  }

  handleSubmit() {

  }

  render() {
    var cart = <p>Please navigate to our <Link to='/'>Search Page</Link> to add widgets to your cart!</p>;

    if (!this.props.currentOrder.length) {
      return (
        <div>
          <h3>Current Order</h3>
          <Button
            className="right"
            onClick={()=> this.props.updateOrderView(false)}>
            Look Up Previous Orders</Button>
          {cart}
        </div>
      );
    }

    cart = this.props.currentOrder.map((widget, i) => (
          <p key={'widget' + i}>
            {widget.size} {widget.finish} Widget {widget.type}
          </p>
        ));

    return (
      <div>
        <h3>Current Order</h3>
        <Button
          className="right"
          onClick={()=> this.props.updateOrderView(false)}>
          Look Up Previous Orders</Button>
        {cart}
        <Modal
          onClick={this.handleSubmit}
          trigger={
            <Button className='order-button'>
              Show Me the Widgets!
            </Button>
          }>
          <h1>Order Number: {this.state.orderNumber}</h1>
          <p>Thanks for your widget order!</p>
          <p>We like to help! If you would like any assistance with your order, just give us a call and have your order number ready to help us help you!</p>
        </Modal>
      </div>
    );
  }
}

export default CurrentOrder;