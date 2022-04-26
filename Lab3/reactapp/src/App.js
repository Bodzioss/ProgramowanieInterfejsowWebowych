import React, { PureComponent } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import NavigationPanel from './NavigationPanel';
import InputData from './InputData';
import GroupResult from './GroupResult';
import StudentsResults from './StudentsResult';
import filterGroup from './filterGroup';
import filterStudents from './filterStudents';

import "./App.css";


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
      <Router>
        <div className="App">
          <NavigationPanel />
          <InputData textChange={this.handleSearchChange} />
          <Routes>
            <Route path="/StudentsResult" element={<StudentsResults studentsData={this.state.filterStudents} />} />
            <Route path="/GroupResult" element={<GroupResult groupData={this.state.filterGroup} />} />
          </Routes>
        </div>
      </Router>
    );
  }
}


