import React, { PureComponent } from "react";

import Header from './Header';
import InputData from './InputData';
import GroupResult from './GroupResult';
import filterGroup from './filterGroup';

import "./App.css";
import StudentsResults from './StudentsResult';
import filterStudents from './filterStudents';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavigationPanel from './NavigationPanel';


export default class App extends PureComponent {

  

  constructor(props) {
    super(props);
    this.state = {
      filterStudents: filterStudents("", 20),
      filterGroup: filterGroup("", 20)
    };
  }

  handleSearchChange = event => {
    this.setState({
      filterStudents: filterStudents(event.target.value, 20),
      filterGroup: filterGroup(event.target.value, 20)
    });
  };


  render() {
    return (
      // <div className="App">
      //   <Header />
      //   <InputData textChange={this.handleSearchChange} />
      //   {/* <GroupResults groupData={this.state.filterGroup}/> */}
      //    <StudentsResults studentsData={this.state.filterStudents}/>
      // </div>
      <Router>
      <div className="App">
        <NavigationPanel />
        <InputData textChange={this.handleSearchChange} />
        <Routes>
          <Route path="/StudentsResult" element={ <StudentsResults studentsData={this.state.filterStudents}/>}/>
          <Route path="/GroupResult" element={ <GroupResult groupData={this.state.filterGroup}/>}/>
        </Routes>
      </div>
    </Router>
    );
  }
}


