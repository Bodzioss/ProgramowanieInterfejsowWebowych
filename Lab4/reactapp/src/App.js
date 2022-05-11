import React, { PureComponent } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import axios from "axios";
import NavigationPanel from './components/NavigationPanel';
import InputData from './components/InputData';
import GroupResult from './components/GroupResult';
import StudentsResults from './components/StudentsResult';
import filterGroup from './filterGroup';
import filterStudents from './filterStudents';
import { GroupContainer } from './components/GroupContainer';
import { StudentContainer } from './components/StudentContainer';

import "./App.css";


const api = axios.create({
  baseURL: 'http://localhost:3000/groupList.json'
})

export default class App extends PureComponent {

  state = {
    groups: []
  }


  constructor(props) {
    super(props);
    this.getGroups.bind(this);
    this.state = {
      filterStudents: filterStudents("", 20,),
      filterGroup: filterGroup("", 20,this.state.groups)
    };
  }

  getGroups = async () => {
    let data = await api.get('/').then(({data}) => data);
    this.setState({groups: data})
    console.log("data")
  }

  handleSearchChange = event => {
    this.setState({
      filterStudents: filterStudents(event.target.value, 20),
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
              <StudentsResults studentsData={this.state.filterStudents} />
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


