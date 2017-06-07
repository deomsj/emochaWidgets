import React, { Component } from 'react';
import {Dropdown, Button, NavItem} from 'react-materialize';
import WidgetDisplay from './WidgetDisplay';

class Search extends Component {

  constructor(props) {
    super(props);
    this.updateSearch = this.updateSearch.bind(this);
    this.state = {
      searchFor: '',
      widgets: [],
      categories: [],
      sizes: [],
      finishes: []
    };
  }

  updateSearch(target) {

    if (!target) {
      var filteredWidgets = this.props.data;
    } else {
      var filteredWidgets = this.props.data.filter((widget)=>{
        return widget.type === target || widget.size === target || widget.finish === target;
      });
    }

    filteredWidgets = filteredWidgets.map((widget, i) => (
        <WidgetDisplay
          widget={widget}
          add = {this.props.addToCurrentOrder}
          key={'widget' + i} />
      )
    );

    this.setState({
      searchFor: target,
      widgets: filteredWidgets
    });
  }

  componentWillMount() {
    var widgets = this.props.data.map((widget, i) => (
        <WidgetDisplay
          widget={widget}
          add = {this.props.addToCurrentOrder}
          key={'widget' + i} />
      )
    );

    var uniqueCategories = {};
    var uniqueSizes = {};
    var uniqueFinishes = {};
    this.props.data.forEach((widget) => {
      uniqueCategories[widget.type] = true;
      uniqueSizes[widget.size] = true;
      uniqueFinishes[widget.finish] = true;
    });

    uniqueCategories = Object.keys(uniqueCategories).map((category, i) => (
      <NavItem onClick={()=> this.updateSearch(category)} key={'category' + i} >
        {category}
      </NavItem>
    ));

    uniqueSizes = Object.keys(uniqueSizes).map((size, i) => (
      <NavItem onClick={()=> this.updateSearch(size)} key={'size' + i}>
        {size}
      </NavItem>
    ));

    uniqueFinishes = Object.keys(uniqueFinishes).map((finish, i) => (
      <NavItem onClick={()=> this.updateSearch(finish)} key={'finish' + i}>
        {finish}
      </NavItem>
    ));

    this.setState({
      widgets: widgets,
      allWidgets: widgets,
      categories: uniqueCategories,
      sizes: uniqueSizes,
      finishes: uniqueFinishes
    });
  }

  render() {

    return (
      <div>
        <Button onClick={()=> this.updateSearch('')}>All</Button>
        <Dropdown trigger={<Button>Category</Button>} >
          {this.state.categories}
        </Dropdown>

        <Dropdown trigger={<Button>Size</Button>} >
          {this.state.sizes}
        </Dropdown>

        <Dropdown trigger={<Button>Finish</Button>} >
          {this.state.finishes}
        </Dropdown>
        <br />

        {this.state.widgets}
      </div>
    );
  }

};

export default Search;