import groupList from "./groupList.json";

export default function filterGroup(searchText, maxResults,groups) {

  const axios = require('axios');
  console.log(groups)
  // const res = axios.get('http://localhost:3000/groupList.json') .then(response => {
  //   const groupJson = response.data.map(it => (it.title,it.subjects));
    
  //   // console.log(groupJson)
  //   const groupp = groupJson
  //   .filter(group => {
  //     if (group.toLowerCase().includes(searchText.toLowerCase())) {
  //       return true;
  //     }
  //     if (group.description.includes(searchText)) {
  //       return true;
  //     }
  //     return false;
  //   })
  //   .slice(0, maxResults);
  //   return groupp;
  // });

    const groupp = groupList
    .filter(group => {
      if (group.title.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      if (group.description.includes(searchText)) {
        return true;
      }
      return false;
    })
    .slice(0, maxResults);
    return groupp;
}
