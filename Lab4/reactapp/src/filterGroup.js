import groupList from "./groupList.json";

export default function filterGroup(searchText, maxResults) {

  const axios = require('axios');

  const res = axios.get('http://localhost:3000/groupList.json') .then(response => {
    const groupJson = response.data.map(it => (it.title));
    
    console.log(groupJson)
    
    return groupJson;
  });

   
}
