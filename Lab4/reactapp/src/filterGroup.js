import groupList from "./groupList.json";

export default function filterGroup(searchText, maxResults) {
  return groupList
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
}
