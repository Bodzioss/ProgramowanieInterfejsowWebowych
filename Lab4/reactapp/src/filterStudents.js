import { useEffect, useState } from "react";
import axios from 'axios'

export default function FilterStudents(searchText, maxResults) {

  const [toDos,setToDos] = useState([]);

  useEffect(() => {
    axios.get("http://localhosts:3000/studentsList.json")
      .then(res => {
        const todos = res.data.map(it => it.name);
        setToDos(toDos);
      })
  })
  return toDos
    .filter(group => {
      if (group.subjects.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      if (group.description.includes(searchText)) {
        return true;
      }
      return false;
    })
    .slice(0, maxResults);
}
