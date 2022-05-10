import React, { PureComponent } from "react";
import PropTypes from "prop-types"

import StudentsResultRow from "./StudentsResultRow";
import "./styles/StudentsResult.css";

export default class StudentsResult extends PureComponent {
  static propTypes = {
    studentsData: PropTypes.array
  };


  render() {
    return (
      <div className="component-group-results">
        {this.props.studentsData.map(studentsData => (
          <StudentsResultRow
            key={studentsData.email}
            name={studentsData.name}
            tags={studentsData.tags}
            subjects={studentsData.subjects}
            description={studentsData.description}
          />
        ))}
      </div>
    );
  }
}
