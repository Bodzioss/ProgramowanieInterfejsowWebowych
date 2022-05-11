
import React, { useEffect, useState } from 'react';
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



function App() {


  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axios.get('studentsList.json')
      .then(res => {
        const newRes = res.data.students.map(student => {
          return {...student, photo: 'https://picsum.photos/70/100'}
        })
        setStudents(newRes);
      });

    axios.get('groupList.json')
         .then(res => {
                setGroups(res.data);
              })
         .catch(err => {
                console.log(err)
              })

  }, []);





    return (
      <Router>
        <div className="App">
          <NavigationPanel/>
          <Routes>
            <Route path="/StudentsResult" element={<div>
              <StudentsResults studentsData={students} />
              {/* <StudentContainer triggerText={triggerTextStudent} onSubmit={StudentOnSubmit} /> */}
            </div>
            } />
            <Route path="/GroupResult" element={<div>
              <GroupResult groupData={groups} />
              {/* <GroupContainer triggerText={triggerTextGroup} onSubmit={GroupOnSubmit} /> */}
            </div>
            } />
          </Routes>
        </div>
      </Router>
    );
  }



export default App;


