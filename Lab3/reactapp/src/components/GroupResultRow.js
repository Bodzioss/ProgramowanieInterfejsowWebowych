import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./styles/GroupResultRow.css";

export default class GroupResultsRow extends PureComponent {

  render() {
    return (
      <div className="component-group-result-row copy-to-clipboard">
        <div className="main">
          <span className="title">{this.props.title}  </span>
          <div className="number">
            <span className="currentNumber">{this.props.currentNumber}/</span>
            <span className="maxNumber">{this.props.maxNumber}</span>
          </div>
        </div>
        <span className="description">{this.props.description}</span>
      </div>
    );
  }
}
