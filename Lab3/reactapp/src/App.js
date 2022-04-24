import logo from './logo.svg';
import React, { PureComponent } from "react";

import Header from './Header';
import InputData from './InputData';
import GroupResults from './GroupResults';
import filterGroup from './filterGroup';

import "./App.css";


export default class App extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      filterGroup: filterGroup("", 20)
    };
  }

  handleSearchChange = event => {
    this.setState({
      filterGroup: filterGroup(event.target.value, 20)
    });
    console.log('fdsfds')
  };


  render() {
    return (
      <div className="App">
        <Header />
        <InputData textChange={this.handleSearchChange} />
        <GroupResults groupData={this.state.filterGroup}/>
      </div>
    );
  }
}


