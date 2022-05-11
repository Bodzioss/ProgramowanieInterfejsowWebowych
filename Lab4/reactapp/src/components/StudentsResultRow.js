import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./styles/StudentsResultRow.css";

export default class StudentsResultRow extends PureComponent {

  render() {
    return (
      <div className="component-group-result-row">
        <div className="main">
        <div className="content">
          <div className="Name">{this.props.name}  </div>
            <div className="tags">{this.props.tags}</div>
            <div className="subjects">{this.props.subjects}</div>
        <div className="description">{this.props.description}</div>
        </div>
        <div className="Image">
        <img src={this.props.photo}></img>
        </div>
      </div>
      </div>
    );
  }
}
