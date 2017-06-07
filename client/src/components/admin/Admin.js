import React, { Component } from 'react';
import {Table, Row, Input, Button} from 'react-materialize';

class Admin extends Component {

  constructor(props) {
    super(props);
    this.updateSize = this.updateSize.bind(this);
    this.updateFinish = this.updateFinish.bind(this);
    this.updateType = this.updateType.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.addNewWidget = this.addNewWidget.bind(this);
    this.state = {
      rows: [],
      size: '',
      finish: '',
      type: '',
      quantity: '',
    };
  }

  updateSize(e) {
    this.setState({
      size: e.target.value
    });
  }

  updateFinish(e) {
    this.setState({
      finish: e.target.value
    });
  }

  updateType(e) {
    this.setState({
      type: e.target.value
    });
  }

  updateQuantity(e) {
    this.setState({
      quantity: e.target.value
    });
  }

  addNewWidget() {
    var incompleteFields = []
    if (this.state.size === '') {
      incompleteFields.push('Size');
    }
    if (this.state.finish === '') {
      incompleteFields.push('Finish');
    }
    if (this.state.type === '') {
      incompleteFields.push('Type');
    }
    if (this.state.quantity === '') {
      incompleteFields.push('Quantity');
    }

    if (incompleteFields.length) {
      var prompt = 'Plese complete the following fields: ';
      prompt += incompleteFields.join(', ');
      alert(prompt);
    } else {
      //add widget
      alert('your widget has been added!');
      this.setState({
        size: '',
        finish: '',
        type: '',
        quantity: ''
      });
    }
  }

  componentWillMount() {
    var rows = this.props.data.map((widget, i) => (
      <tr key={i} className={i % 2 ? 'odd-row' : ''}>
        <td>{widget.size}</td>
        <td>{widget.finish}</td>
        <td>{widget.type}</td>
        <td>
          <input type="text" placeholder={widget.quantity} className='quantity-field'/>
        </td>

      </tr>
    ));

    this.setState({
      rows: rows
    });
  }

  render() {
    return (
      <div>
        <h3> Add New Widgets </h3>
        <p>Please note that adding a widget that already exists in our inventory will increase the previous quanity by the amount that you enter here.</p>
            <Row>
              <Input
                label="Size"
                s={3}
                value={this.state.size}
                onChange={this.updateSize} />
              <Input
                label="Finish"
                s={3}
                value={this.state.finish}
                onChange={this.updateFinish} />
              <Input
                label="Type"
                s={3}
                value={this.state.type}
                onChange={this.updateType} />
              <Input
                label="Quantity"
                s={1}
                value={this.state.quantity}
                onChange={this.updateQuantity} />
              <Button
                onClick={this.addNewWidget}
                floating waves='light'
                value={this.size}
                className='add-widget-button'>+</Button>
            </Row>

        <h3> Update Inventory </h3>
        <p> Edit Widget Quantities, then click the 'Update' button to save your changes </p>
        <Table>
          <thead>
            <tr>
              <th data-field="size">Size</th>
              <th data-field="finish">Finish</th>
              <th data-field="type">Type</th>
              <th data-field="quantity">
                Quantity</th>
            </tr>
          </thead>

          <tbody>
            {this.state.rows}
          </tbody>
        </Table>
      </div>
    );
  }
};

export default Admin;