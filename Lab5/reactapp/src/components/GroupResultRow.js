import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./styles/GroupResultRow.css";

export default class GroupResultsRow extends PureComponent {

  render() {
    return (
      <div className="component-group-result-row">
        <div className="title">{this.props.title}  </div>
        <div className="subjects">{this.props.subjects}  </div>
        <div className="description">{this.props.description}</div>
      </div>
    );
  }
}
