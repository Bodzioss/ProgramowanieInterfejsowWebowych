import studentsList from "./studentsList.json";

export default function filterStudents(searchText, maxResults) {
  return studentsList
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
