import React, { Component } from 'react';
import {Input, Row, Button} from 'react-materialize';


class PreviousOrders extends Component {

  constructor(props) {
    super(props);
    this.updateSearch = this.updateSearch.bind(this);
    this.state = {
      orderNumberInput: ''
    };
  }

  updateSearch(e) {
    this.setState({
      orderNumberInput: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h3>Look Up Previous Orders</h3>
        <Button
          className="right"
          onClick={()=> this.props.updateOrderView(true)}>
          Current Order</Button>
        <Row>
          <Input
            label="Search By Order Number"
            s={4}
            onChange={this.updateSearch} />
        </Row>
      </div>
    );
  }
}

export default PreviousOrders;