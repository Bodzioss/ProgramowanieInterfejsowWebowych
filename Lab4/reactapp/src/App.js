import React, { PureComponent } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import NavigationPanel from './components/NavigationPanel';
import InputData from './components/InputData';
import GroupResult from './components/GroupResult';
import StudentsResults from './components/StudentsResult';
import filterGroup from './filterGroup';
// import FilterStudents from './FilterStudents';
import { GroupContainer } from './components/GroupContainer';
import { StudentContainer } from './components/StudentContainer';

import "./App.css";


export default class App extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      // filterStudents: FilterStudents("", 20),
      filterGroup: filterGroup("", 20)
    };
  }

  handleSearchChange = event => {
    this.setState({
      // filterStudents: FilterStudents(event.target.value, 20),
      filterGroup: filterGroup(event.target.value, 20)
    });
  };



  render() {

    const triggerTextStudent = 'Dodaj Studenta';
    const triggerTextGroup = 'Dodaj Grupę';

    const GroupOnSubmit = (event) => {
      event.preventDefault(event);
      console.log(event.target.name.value);
      console.log('GroupOnSubmit');
    };


    const StudentOnSubmit = (event) => {
      event.preventDefault(event);
      console.log(event.target.name.value);
      console.log(event.target.email.value);
      console.log('StudentOnSubmit');
    };
    return (
      <Router>
        <div className="App">
          <NavigationPanel />
          <InputData textChange={this.handleSearchChange} />
          <Routes>
            <Route path="/StudentsResult" element={<div>
              {/* <StudentsResults studentsData={this.state.filterStudents} /> */}
              <StudentContainer triggerText={triggerTextStudent} onSubmit={StudentOnSubmit} />
            </div>
            } />
            <Route path="/GroupResult" element={<div>
              <GroupResult groupData={this.state.filterGroup} />
              <GroupContainer triggerText={triggerTextGroup} onSubmit={GroupOnSubmit} />
            </div>
            } />
          </Routes>
        </div>
      </Router>
    );
  }
}


