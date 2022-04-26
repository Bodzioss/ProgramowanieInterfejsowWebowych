import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./StudentsResultRow.css";

export default class StudentsResultRow extends PureComponent {

  render() {
    return (
      <div className="component-group-result-row copy-to-clipboard">
        <div className="main">
            <span className="Name">{this.props.name}  </span>
            <div className="number">
            <span className="tags">{this.props.tags}/</span>
            <span className="subjects">{this.props.subjects}</span>
            </div>
        </div>
        <span className="description">{this.props.description}</span>
      </div>
    );
  }
}
