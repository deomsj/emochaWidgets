import React from 'react';
import {Button, NavItem, Modal} from 'react-materialize';

const WidgetDisplay = ({widget, add}) => (
  <p className='searchWidgets'>
    <Modal
      header='Success!'
      onClick={() => add(widget)}
      trigger={<Button className='add-button'>Add</Button>}>
      <p>A {widget.size} {widget.finish} Widget {widget.type} has been added to your current order!</p>
    </Modal>
    <span>
      {widget.size} {widget.finish} Widget {widget.type}
    </span>
  </p>
);

export default WidgetDisplay;