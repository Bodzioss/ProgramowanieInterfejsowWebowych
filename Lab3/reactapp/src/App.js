import React, { PureComponent } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import NavigationPanel from './components/NavigationPanel';
import InputData from './components/InputData';
import GroupResult from './components/GroupResult';
import StudentsResults from './components/StudentsResult';
import filterGroup from './filterGroup';
import filterStudents from './filterStudents';
import CreateGroupPopup from "./components/CreateGroupPopup";

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
            <Route path="/GroupResult" element={<div><GroupResult groupData={this.state.filterGroup} /> <CreateGroupPopup trigger={true}><h1>Dziala</h1></CreateGroupPopup> </div>} />
          </Routes>
        </div>
      </Router>
    );
  }
}


